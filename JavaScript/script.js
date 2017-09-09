var temp="";
var key="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
function passGenerator(plength)
{
    temp='';
    for(i=0;i<plength;i++)
        {
            
           temp+=key.charAt(Math.floor(Math.random()*key.length)); 
            
        }
    return temp;

}

function populateForm(enterLength)
{
    
    document.passGen.output.value=passGenerator(enterLength);
    
}