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
    console.log(checkBoxes);
    var arr = Array.from(checkBoxes);
    let a=false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].cheked) {
            a=true;
            break;
        }
    }
    return a;
}

function checkForm() {
    let checkBoxes =checkBoxCheck();
    let checkBox1div=document.getElementById("checkBox1div");
    let checkBox=document.getElementById("checkBox");
    console.log(checkBoxes);
    console.log(checkBox1div);
    console.log(checkBox);

    if (checkBoxes) {
        checkBox1div.style.border="none";
        checkBox.style.display="none";
    }
    else  {
        checkBox1div.style.border="1px solid rgb(217,48,37)";
        checkBox.style.display="block";
        checkBox1div.focus();
    }


    return true;
}

