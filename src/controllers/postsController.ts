import { Request, Response } from 'express';
import { pool } from '../db/pool';

/**
 * Fetch all posts metadata from the database.
 */
export async function getAllPosts(_req: Request, res: Response) {
  try {
    const result = await pool.query(
      'SELECT slug, title, author, summary, tags, created_at FROM posts WHERE visible = true ORDER BY created_at DESC'
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching posts' });
  }
}
