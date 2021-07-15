console.log("ths is script file")
const toggleSidebar = () => {

	if ($('.sidebar').is(":visible")) {
		//yadi side bar dikh rha hai too band krna hai
		$(".sidebar").css("display", "none");
		$(".content").css("margin-left", "0%");
	} else {
		//yadi side bar nhi dikh rha hai too show krna hai
		$(".sidebar").css("display", "block");
		$(".content").css("margin-left", "20%");
	}
};