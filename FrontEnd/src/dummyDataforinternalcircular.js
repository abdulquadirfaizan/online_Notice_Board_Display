let internalcirculardata = [
    {
        heading: '',
        content: '',
        date: ''
    }
]

if (!localStorage.getItem("isInternalcircularSaved")) {
    localStorage.setItem("internal-circualr", JSON.stringify(internalcirculardata))
}

export default internalcirculardata;