let placementdata = [
    {
        heading:
            "",
        content:
            "",
        date:
            ""
    },
];

if (!localStorage.getItem("isPlacementNoticeArraySaved")) {
    localStorage.setItem("placement-notice-data", JSON.stringify(placementdata));
}

export default placementdata;
