import { StudentType } from "../libs/types/student";

export default function StudentCard({name, grade, isOnline}: StudentType) {

    return (
        <div>
            <h1>{name}</h1>
            <p>{grade}</p>
            <p>{isOnline ? "Online" : "Offline"}</p>
        </div>
    );
}