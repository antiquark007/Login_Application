import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

//added register to put data for login
export const register = async (req: Request, res: Response) => {
  const { uid, password } = req.body;

//hashed the passwd  before saving
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        uid,
        password: hashedPassword,
      },
    });
    res.status(201).json({ user: { id: user.id, uid: user.uid } });
  } catch (error) {
    res.status(500).json({ error: 'Error creating user' });
  }
};

export const login = async (req: Request, res: Response) => {
  const { uid, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { uid },
    });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    //here id to deal with keep track 
    res.status(200).json({ 
      user: { 
        id: user.id.toString(), 
        uid: user.uid,
        name: user.uid
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Error authenticating user' });
  }
};