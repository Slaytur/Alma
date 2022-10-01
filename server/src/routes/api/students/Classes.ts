/* eslint-disable @typescript-eslint/no-explicit-any */

import { Router } from 'express';

// import { Class } from '../../../models/class.model';
// import { User } from '../../../models/user.model';

const router = Router();

router.get(`/`, (req, res) => {
    // const classes = [];
    // for (const classID of req.user.classes) {
    //     const classDoc = await Class.find({ id: classID });
    // }

    // req.isAuthenticated()
    //     ? res.status(200).json({ authenticated: true, username: (req.user as any).username, avatar: (req.user as any).avatar })
    //     : res.status(200).json({ authenticated: false });
});

export default router;
