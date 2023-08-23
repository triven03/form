function fileUpload(span) {
    let file = document.getElementById(span);
    console.log(span);
    file.click();
}

function fileSelect(input,div) {
    let filediv = document.getElementById(div);
    filediv.innerHTML=`<span onclick="fileUpload(${'file'})" title="file" id="filespan"> <i class="fa-solid fa-image imgred"></i>${input.files[0].name} </span><i class="fa-solid fa-x cross" onclick="clearFile()"></i>`
    
}

function clearFile() {
    let filediv= document.getElementById("filediv");
    let input= document.getElementById("file");
    filediv.innerHTML=`<span class="filespan" onclick="fileUpload('file')" title="file" id="filespan"> <i class="fa-sharp fa-solid fa-arrow-up-from-bracket"></i>Add File</span>`
    input.value='';
    
}

function checkBoxCheck() {
    let checkBoxes= document.getElementsByClassName("checkBoxes");
    // console.log(checkBoxes);
    var arr = Array.from(checkBoxes);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].checked) {
           return true;
        }
    }
    return false;
}

function fileCheck() {
    let input= document.getElementById("file");
    // console.log(input);
    
   if (input.files.length) {
           return true;
        }
    return false;
}

function tickBoxGridCheck() {
    let row1= document.getElementsByClassName("tickBoxGridR1");
    let row2= document.getElementsByClassName("tickBoxGridR2");
    let row3= document.getElementsByClassName("tickBoxGridR3");
    // console.log(checkBoxes);
    let a= false;
    let b= false;
    let c= false;

    var arr1 = Array.from(row1);
    var arr2 = Array.from(row2);
    var arr3 = Array.from(row3);
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i].checked) {
           a=true;
           break;
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i].checked) {
            b=true;
            break;
        }
    }
    for (let i = 0; i < arr3.length; i++) {
        if (arr3[i].checked) {
            c=true;
            break;
        }
    }

    if (a && b && c) {
        return true;
    }

    return false;
}


function checkForm() {
    if (checkDiv()) {
        let a = document.createElement("a");
        a.setAttribute("href","/form2.html")
        a.click();
        // return true;
    }

    return false;
}


function divShowRed(div,msg,con) {
    let parentDiv=document.getElementById(div);
    let warning=document.getElementById(msg);

    if (con) {
        parentDiv.style.border="none";
        warning.style.display="none";
    }
    else  {
        parentDiv.style.border="1px solid rgb(217,48,37)";
        warning.style.display="block";
        // parentDiv.focus();
    }
    
}

function checkDiv() {
   let a = checkBoxCheck()
   let b = fileCheck()
   let c = tickBoxGridCheck()

   console.log(a);
   console.log(b);
   console.log(c);

   divShowRed("checkBox1div","checkBox",a);
   divShowRed("fileuploadDiv","fileUpload",b);
   divShowRed("tickBoxGridDiv","tickBoxGrid",c);
    
   if (a && b && c) {
    return true;
   }

   return false;
}
