let placementresultdata = [

    {
        heading:
            "",
        content:
            "",
        date:
            ""
    },
];

if (!localStorage.getItem("isPlacementResultNoticeArraySaved")) {
    localStorage.setItem("placement-result-data", JSON.stringify(placementresultdata));
}

export default placementresultdata;
