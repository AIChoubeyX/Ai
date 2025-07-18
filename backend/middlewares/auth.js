// import { clerkClient } from "@clerk/express";

// export const auth = async(req, res, next) => {
//     try {
//         const {userId,has} = await req.auth()
//         const user = await clerkClient.users.getUser(userId)
//     } catch (error) {

        
//     }
// }

import { clerkClient } from "@clerk/express";

export const auth = async (req, res, next) => {
  try {
    // Ensure this is coming from Clerk
    const { userId } = await req.auth();

    if (!userId) {
      return res.status(401).json({ error: "Unauthorized: No user ID found" });
    }

    const user = await clerkClient.users.getUser(userId);

    // Attach user info to request for downstream use
    req.user = user;
    req.userId = userId;

    next();
  } catch (error) {
    console.error("Auth middleware error:", error);
    return res.status(401).json({ error: "Authentication failed" });
  }
};
