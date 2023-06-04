let noticedata = [
  {
    heading: '',
    content: '',
    date: ''
  }
];

if (!localStorage.getItem("isNoticeArraySaved")) {
  localStorage.setItem("notice-data", JSON.stringify(noticedata));
}

export default noticedata;
