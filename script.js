let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperwithMap() {
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map(employee => {
        if(employee.profession == "developer" )
        console.log(employee)
  })
  }
  PrintDeveloperbyMap()
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(employee => {
        if(employee.profession == "developer")
            console.log(employee)
    })
  }
  PrintDeveloperbyForEach()
  
  function addData() {
    //Write your code here, just console.log
    let arr2 = {id:4,name:"susan",age:"20",profession:"intern"}
    arr.push(arr2)
    console.log(arr)
  }
  addData()
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr = arr.filter(employee => employee.profession !== "admin")
            console.log(arr)
    //console.log(arr)
  }
  removeAdmin()
  
  function concatenateArray() {
    //Write your code here, just console.log
    let arr1 = [
          { id: 4, name: "suhas", age: "23", profession: "developer" },
          { id: 5, name: "mike", age: "22", profession: "manager" },
          { id: 6, name: "emily", age: "21", profession: "developer" }
      ];
      let concatenatedArray = arr.concat(arr1)
      console.log(concatenatedArray)
  }
  concatenateArray()
  
  }
  PrintDeveloperwithMap()