import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { router } from './routes';

const PORT = process.env.PORT || 3000;