
        class Tarea {
            nombre: string;
            fechaVencimiento: Date;
            completada: boolean;

            constructor(nombre: string, fechaVencimiento: Date) {
                this.nombre = nombre;
                this.fechaVencimiento = fechaVencimiento;
                this.completada = false;
            }
        }

        const tareas: Tarea[] = [];

        function agregarTarea() {
            const taskInput = document.getElementById("taskInput") as HTMLInputElement;
            const taskName = taskInput.value.trim();

            if (taskName === "") {
                alert("Por favor, ingrese un nombre válido para la tarea.");
                return;
            }

            const nuevaTarea = new Tarea(taskName, new Date());
            tareas.push(nuevaTarea);
            actualizarListaTareas();
            taskInput.value = "";
        }

        function toggleCompletar(index: number) {
            tareas[index].completada = !tareas[index].completada;
            actualizarListaTareas();
        }

        function eliminarTarea(index: number) {
            tareas.splice(index, 1);
            actualizarListaTareas();
        }

        function actualizarListaTareas() {
            const taskList = document.getElementById("taskList");
            if (!taskList) {
                return;
            }
            taskList.innerHTML = "";

            tareas.forEach((tarea, index) => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `
                    ${tarea.nombre} ( Vence el: ${tarea.fechaVencimiento.toDateString()})
                    <button onclick="toggleCompletar(${index})">${tarea.completada ? "Desmarcar" : "Completar"}</button>
                    <button onclick="eliminarTarea(${index})">Eliminar</button>
                `;

                if (tarea.completada) {
                    listItem.style.textDecoration = "line-through";
                }

                taskList.appendChild(listItem);
            });
        }

        // Inicializar la lista de tareas
        actualizarListaTareas();

        // Event listener para el botón "Agregar"
        const addTaskButton = document.getElementById("addTaskButton") as HTMLButtonElement;
        addTaskButton.addEventListener("click", agregarTarea);
    