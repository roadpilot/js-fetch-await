async function getData(ref){
	sql = "select name,linkedin,company,prev_career from contacts where (serial=" + ref + ")";
  return fetch("/data/ajax.php", {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({db:"<?php echo $dbname;?>",sql:sql})
  })
}

async function preForm(t,a,b){
	const rObj = await getData(a.contactid.value);
	let data = await rObj.json()
//	await console.log(data.name)
	const name = data.name.split(" ")[0]
	const fname = name.charAt(0).toUpperCase() + name.slice(1)
	const company = data.company
	const prev_career = data.prev_career

// 
// do some stuff here 
// 

}