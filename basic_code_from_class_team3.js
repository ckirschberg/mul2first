 // js code here

//  let firstname = "Bjørn"
//  const lastname = "Kayser"
// //  firstname = "Christian";

//  console.log("God eftermiddag " + firstname + " " + lastname)


 function goodAfternoon() {
    const firstname = document.getElementById("firstname").value
    const lastname = document.getElementById("lastname").value
    
    document.getElementById("name").textContent = Number(firstname) + Number(lastname)
 }
