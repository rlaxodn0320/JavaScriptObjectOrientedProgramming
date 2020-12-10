var memberArray = ['rlaxodn0320', 'good', 'nice'];
console.log("memberArray[1]", memberArray[1]); //good

var memberObject = {
    manager:'rlaxodn0320',
    developer:'good',
    designer:'nice'
}
memberObject.designer = 'very nice'
console.log("memberObject.designer", memberObject.designer);
console.log("memberObject['designer']", memberObject['designer']);
delete memberObject.manager
console.log('after delete memberObject.manager', memberObject.manager);
memberObject.verynice = 'very nice'
console.log("memberObject.verynice", memberObject.verynice);