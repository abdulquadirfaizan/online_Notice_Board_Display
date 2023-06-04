let externalcirculardata = [
    {
        heading: '',
        content: '',
        date: ''
    }
]

if (!localStorage.getItem("isExternalcircularSaved")) {
    localStorage.setItem("external-circualr", JSON.stringify(externalcirculardata))
}

export default externalcirculardata;