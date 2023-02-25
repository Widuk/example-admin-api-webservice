import { Request, Response } from 'express'

export class HealthController {
    public getHealth = async (req: Request, res: Response): Promise<void> => {
        res.status(200).json('Hello! I\'m working! (づ｡◕‿‿◕｡)づ')
    }
}