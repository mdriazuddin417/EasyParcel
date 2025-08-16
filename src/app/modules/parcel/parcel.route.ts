import express from "express";



const router = express.Router();

// api/v1/booking
// router.post("/",
//     checkAuth(...Object.values(Role)),
//     // validateRequest(createBookingZodSchema),
//     BookingController.createBooking
// );

// // api/v1/booking
// router.get("/",
//     checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
//     BookingController.getAllBookings
// );


export const BookingRoutes = router;
