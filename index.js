function getLink() {
// constructs unique page using name and choice of music - SECTION A.2
temp = muresources[choice]
temp2 = "<TITLE>Custom Links</TITLE><H3>" +document.m.pername.value+", here are some
links for you</H3><P>"+temp
}

function writeIt(){
// creates new window to display page - SECTION A.3
diswin = window.open();
diswin.document.open();
diswin.document.write(temp2);
diswin.document.close()
}

function doAll(){
// master routine calls other functions - SECTION A.4
getLink();
writeIt()
}
