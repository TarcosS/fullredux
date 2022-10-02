import { configureStore } from "@reduxjs/toolkit";
import reminderReduces from '../features/reminder/addReminder'

export default configureStore ({
    reducer: {
        reminderAdder: reminderReduces,
    }
})