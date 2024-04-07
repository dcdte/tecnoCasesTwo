const reportConfig = {
  appName: "tecnosuper",
  reportName: "SuperCaseReporte",
  imgFieldName: "previewTecnoCase",
  publicURI:
    "SXb8BYBmSkxhtOb0543AUQ2hBwdbdG3hCHf6nQmvkAAYGQx4sXC3tDpAbpZ1OenrdSfxsHxCF54aObOhm3pdpETErG0CpTteH33D",
};

export const getImageZoho = (data) => {
  console.log(data)
  return `https://creatorapp.zohopublic.com/file/vt.cel/${
    reportConfig.appName
  }/${reportConfig.reportName}/${data.id}/${
    reportConfig.imgFieldName
  }/image-download/${reportConfig.publicURI}?filepath=/${
    data[reportConfig.imgFieldName].match(/(?<=filepath=).*/)[0]
  }`;
};
