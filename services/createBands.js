//let url = "https://apitrymusic.herokuapp.com"

function verificaBands() {
    let bandName = window.document.getElementById('ShowBandName')

    let token = localStorage.getItem('token')

    axios.get(url + "/bands", { headers: { "Authorization": `Bearer ${token}` } })
        .then(response => {
            let bands = response.data

            if (bands.length == 0) {
                return window.location.href = "bands-empty.html"
            }

            let section = window.document.getElementById('main')

        })
        .catch(error => alert(JSON.stringify(error.response.data)))
    }

function createBand() {

    event.preventDefault();

    let bandName = window.document.getElementById('bandName').value

    let data = {
        name: bandName
    }

    let token = localStorage.getItem('token')

    axios.post(url + "/bands", data)
        .then(response => {
            window.location.href = "bands.html"
        })
        .catch(error => alert(JSON.stringify(error.response.body)))
}
function getBands() {
    let bandName = window.document.getElementById('ShowBandName')

    let token = localStorage.getItem('token')

    axios.get(url + "/bands", { headers: { "Authorization": `Bearer ${token}` } })
        .then(response => {
            let bands = response.data

            console.log(bands[0]['Band']['name'])

            let section = window.document.getElementById('main')


            for (let count in bands) {
                console.log(JSON.stringify(bands[count]['Band']['name']))
                let ShowBands = document.createElement('div')
                ShowBands.setAttribute('class', 'band')
                ShowBands.setAttribute('id', count)
                ShowBands.innerHTML = `
            <button class="click-band">
            <label id="ShowBandName" for="">${bands[count]['Band']['name']}</label>
                </button>
            <br><img src="../_imagens/concerto.jpg" alt="">
            <label id="idBand" for="">ID = ${bands[count]['Band']['id']}</label>

            <div class="dropdown">
                <button class="dropbtn"><i class="fa fa-ellipsis-v"></i></button>
                <div class="dropdown-content">
                    <a href="#" onclick="showModall()">Leave band</a>
                </div>
            </div>
        `
                section.append(ShowBands)
            }
        })
        .catch(error => alert(JSON.stringify(error.response.data)))
}

function deleteBand() {

}

//verificaBands()

window.onload(getBands())