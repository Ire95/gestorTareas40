import { addTask, deleteTask, updateTask } from "./task";
import { renderTasks } from "./ui";
import confetti from "canvas-confetti";

document.addEventListener("DOMContentLoaded", () =>{
    //Hacemos visible la lista de tareas
    renderTasks();

    //Agregar el evento para la funcion para agregar tareas
    document.getElementById("task-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const taskInput = document.getElementById("task-input");
        if(taskInput.value !== "") {
            //Agregamos la tarea
            addTask(taskInput.value);

            //Volvemos a cargar la lista de tareas
            renderTasks();

            //Limpiar el input
            document.getElementById("task-input").value = "";
        }
    });

    
    //Agregar el evento para los botones
    document.getElementById("task-list").addEventListener("click", (e) => {
        if(e.target.classList.contains("delete")) {
            const taskId = e.target.parentElement.getAttribute("data-id");
            deleteTask(taskId);
            renderTasks();
        }

        if(e.target.classList.contains("toggle")) {
            const taskId = e.target.parentElement.getAttribute("data-id");
            updateTask(taskId);
            
            if(e.target.innerText ==="Completar") {
                confetti({
                   /* particleCount: 100,
                    spread: 70,
                    origin: {y: 0.6}*/
                    emojis: ['🦄'],
                    emojiSize: 100,
                    confettiNumber: 30,
                })
            }

            renderTasks();
        }

    });

});