let taskList=[{ id: 1, taskName: "Lavar loza", status: false },
  {id: 2, taskName: "Hacer la cama", status: false },
  {id: 3, taskName: "Comprar mercaderia en el super", status: false }
];
const input=document.querySelector(".inputText")
const IDList=document.getElementById("IDList")
const checkbox=document.getElementById("checkbox")
const taskRemove=document.getElementById("taskRemove")
const totalNum=document.getElementById("totalNum")
const checkNum=document.getElementById("checkNum")
const buttonAdd=document.getElementById("buttonAdd")
const totalList=document.getElementById("myTable").getElementsByTagName("tbody")[0];

buttonAdd.addEventListener("click", ()=>{
  let value=input.value
  agregar(value)
  
})

function agregar(nombreTarea){
  taskList.push({id:ultimaTarea()+1, taskName:nombreTarea, status:false});
  actualizarHTML()
}

function ultimaTarea(){
  let mayorId=0
  taskList.forEach(function(tarea){
    if (tarea.id >mayorId){
      mayorId=tarea.id
    }
  })
   return mayorId
}

function eliminar(id){
  let IDremove= taskList.findIndex((tarea) =>
    tarea.id==id
  )
  taskList.splice(IDremove,1)
  actualizarHTML()
}

function totalTasks(){
  let total = taskList.length
  return total
}

function realizadas(){
  let totalReady=0
  taskList.forEach(function(task){
    if (task.status===true){
      totalReady+=1
    }
  })
  return totalReady
}

function actualizarHTML(){
  let html="";
  taskList.forEach(function(task){
    if (task.status===false){
      html += `
      <tr>
        <td>${task.id}</td>
        <td>${task.taskName}</td>
        <td><input type="checkbox" onclick="statusChange(${task.id});"><td>
        <td><button onClick='eliminar(${task.id})'>Eliminar</button></td>
      </tr>`
    } else {
        html += `
        <tr>
          <td>${task.id}</td>
          <td>${task.taskName}</td>
          <td><input type="checkbox" onclick="statusChange(${task.id});" checked><td>
          <td><button onClick='eliminar(${task.id})'>Eliminar</button></td>
        </tr>`
      }
    })
    totalNum.innerHTML=totalTasks()
    checkNum.innerHTML=realizadas()
    totalList.innerHTML=html
  }

function statusChange(id){
  let statusC=taskList.find((tarea) =>
    tarea.id==id
  )
  if (statusC.status=== false){
    statusC.status=true
  } else {
    statusC.status=false
  }
  actualizarHTML()
}

actualizarHTML()