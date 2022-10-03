import { createSlice } from "@reduxjs/toolkit"
let n = 1;
const initialState = {
    value: [],
}
let strMonth = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Kasım","Aralık"];
export const reminderSlice = createSlice({
    name: "reminderAdder",
    initialState,
    reducers: {
        add: (state) => {
            var textValue = document.getElementById('reminderInput').value
            //yyyy-mm-dd to dd-mm-yyyy
            var selectedDate = document.getElementById('reminderDate').value;
            var dateArr = selectedDate.split("-");
            var [day, month, year] = [dateArr[2], dateArr[1], dateArr[0]];
            var changedDate = day + " " + strMonth[month - 1] + " " + year;
            if (textValue && selectedDate) {
                state.value.push({
                    id:n,
                    date: changedDate,
                    text: textValue
                });
                n++
            } else {
                alert("Lütfen bir değer girin.")
            }
        },
        remove: (state, e) => {
            let arr = state.value.filter(element => element.id !== e.payload);
            state.value = arr
        }
    }
});

export const { add, remove } = reminderSlice.actions

export default reminderSlice.reducer;