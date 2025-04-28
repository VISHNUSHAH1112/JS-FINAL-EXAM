let recipes ];

const recipesform=document.getElementById("recipes");
const search=document.querySelector("search");
const description=querySelector("description");
const ingredients=querySelector("ingredients")

recipesform.addEventListener("submit",function(e){
    e.preventDefault();

    const recipenotes=searchinput.value.trim();
    const ingredients=ingredients.valu.trim();
    const description=description.valu.trim();

    if(recipenotes && ingredients && description){
        const newrecipts={
            id:data.now(),
            note:recipenotes,
            ingredients:ingredients,
            description:description
        }

        recipespush(newrecipts);
        displayrecipes();
        recipenotes.reset();
    }
    else{
        alert("please fill all field")
    }
})

function displayrecipes(){
    const conatainer=document.querySelector(".recipt-list");
    if(!conatainer){
        return;
    };

    conatainer.innerHTML="";

    recipes.forEach(recipes=>{
        const div=document.createElement("div");
        div.classList.add('recipe');
        div.innerHTML=`
        `
    })
}