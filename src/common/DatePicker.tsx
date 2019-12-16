import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';


interface Props {
    onChange(date: Date): void;
}

const DatePicker: React.FC<Props> = (props: Props) => {

    return (
        <div>
            <DayPickerInput onDayChange={props.onChange} />
        </div>)
};

export default DatePicker;