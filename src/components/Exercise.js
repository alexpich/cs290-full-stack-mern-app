import React from "react";
import { BsPencil } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";

function Exercise({ exercise, onDelete, onEdit }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td>
                <BsPencil onClick={() => onEdit(exercise)} />
            </td>
            <td>
                <AiOutlineDelete onClick={() => onDelete(exercise._id)} />
            </td>
        </tr>
    );
}

export default Exercise;
