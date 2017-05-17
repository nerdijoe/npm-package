exports.printMsg = function() {
  console.log("This is a message from the demo package");
}

const monthIndo = {
	0: 'Januari',
	1: 'Februari',
	2: 'Maret',
	3: 'April',
	4: 'Mei',
	5: 'Juni',
	6: 'Juli',
	7: 'Agustus',
	8: 'September',
	9: 'Oktober',
	10: 'November',
	11: 'Desember'
}

const dayIndo = {
	0: 'Minggu',
	1: 'Senin',
	2: 'Selasa',
	3: 'Rabu',
	4: 'Kamis',
	5: 'Jumat',
	6: 'Sabtu'
}

exports.get_year = (date_str) => {
	var d = new Date(date_str)
	return d.getFullYear();

}

exports.get_month = (date_str) => {
	var d = new Date(date_str)
	console.log(d)
	return d.getMonth()+1;
}

exports.dateInIndo = (date_str) => {
	var d = new Date(date_str)

	return `${dayIndo[d.getDay()]}, ${d.getDate()} ${monthIndo[d.getMonth()]} ${d.getFullYear()}`
}

