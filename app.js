// * Написать мини-приложение по сохранению заметок. Логика следующая: в коде создать объект в котором будут хранится 
// заметки в следующем виде: {"Январь": ["", ""], "Февраль": ["", ""]} и т.д; на интерфейсе создать поле ввода и вкладки для каждого месяца, 
//  и в зависимости от того какой месяц выбрал пользователь отображать соответствующие заметки; 
//  также сохранять введенный текст заметки в тот месяц который выбрал пользователь; добавление заметок можно сделать как с помощью кнопки, 
//  либо по нажатию на кнопку enter на клавиатуре; дизайн на ваш вкус, я просто накидал самый базовый от которого можно оттолкнуться.

var listWithNotes = {
    "january": ["Dreaming about car", "Call mom" , "Feed cat"],
    "february": ["Find new job", "Fix engine" , "Pay for rent"],
    "march": ["Visit my dad", "Buy new phone" , "Purchase food"],
    "april": ["Fix the bug", "Go to the nature" , "buy pills"],
    "may": ["Start new course", "Learn python" , "Learn c++"],
    "june": ["Fuel my car", "Find motel" , "Have a nap"],
    "july": ["Change operator", "But new phone" , "Charge bank"],
    "august": ["Call dad", "Go to the vacation" , "Cook favourite dish"],
    "september": ["Go to the gym", "Learn playing guitar" , "Buy ciggs"],
    "october": ["Set alarm", "Turn on music" , "Pay bills"],
    "november": ["Go to the park", "Buy Maskking" , "Feed dog"],
    "december": ["Talk to crush", "Forgot" , "Forgot"]
}

var selectedMonthInitial = document.querySelector('.clicked').innerHTML
var listOfNotesSelectedMonth = listWithNotes[selectedMonthInitial]
//Объявляем блок, в котором будут отображаться все заметки
 var ContentWindowNode = document.querySelector(".list-block")
for (var i = 0; i < listOfNotesSelectedMonth.length; i++) 
    {var newDiv = document.createElement("div")
    newDiv.style.marginBottom = "10px"
    newDiv.innerHTML = listOfNotesSelectedMonth[i]
    ContentWindowNode.appendChild(newDiv)}

var buttonsMonthNodes = document.querySelectorAll(".btn-month")
        
buttonsMonthNodes.forEach(MonthNode => {
    MonthNode.addEventListener('click', function handleClick(event) 
            {
            //Удаляем класс Clicked со всех кнопок
            buttonsMonthNodes.forEach(function(NodeToRemove) {
                NodeToRemove.classList.remove("clicked")
            })
            //Добавляем класс Clicked к нажатой кнопке
            var ClickedNode = event.target
            ClickedNode.classList.add("clicked")

            //Считываем месяц, который был выбран кнопкой
            var selectedMonth = ClickedNode.innerHTML

            //генерируем массив заметок по выбранному месяцу
            listOfNotesSelectedMonth = listWithNotes[selectedMonth]
            
            //Объявляем список всех блоков, которые есть в окне заметок
            var ContentWindowNodeAllDivs = ContentWindowNode.querySelectorAll("div")

            //Удалаем все блоки с заметками, если такие имеются
            ContentWindowNodeAllDivs.forEach(divNode => {
                divNode.remove();
              })

            //с помощью цикла считываем каждую заметку в массиве заметок выбранного месяца, добавляем ее в новый блок, после чего добавляем сам новый блок в окно заметок
            for (var i = 0; i < listOfNotesSelectedMonth.length; i++) {
            var newDiv = document.createElement("div")
            newDiv.style.marginBottom = "10px"
            newDiv.innerHTML = listOfNotesSelectedMonth[i]
            ContentWindowNode.appendChild(newDiv)
            }
        }
        )
    }
);

function addNewNote() {
    var newNoteToAdd = ''
    newNoteToAdd = document.getElementById('new-notes-input').value
    var selectedMonthToAdd = document.querySelector('.clicked').innerHTML
    listWithNotes[selectedMonthToAdd].push(newNoteToAdd)
    document.querySelector('.clicked').click()
}

document.querySelector('.btn-add-new-note').addEventListener("click", addNewNote)



