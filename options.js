function saveOptions() {
	var chk_DogNZB = $("input#chkDogNZB").is(':checked');
	var chk_NZBsDotOrg = $("input#chkNZBsDotOrg").is(':checked');
	var chk_NZBIndex = $("input#chkNZBIndex").is(':checked');
	var chk_NZBKing = $("input#chkNZBKing").is(':checked');
	var chk_Binsearch = $("input#chkBinsearch").is(':checked');
	var chk_NzbFinder = $("input#chkNzbFinder").is(':checked');
	var chk_OMGWTFNZBz = $("input#chkOMGWTFNZBz").is(':checked');
	var chk_NzbSu = $("input#chkNzbSu").is(':checked');
	var chk_NZBGeek = $("input#chkNZBGeek").is(':checked');
	var chk_BTDigg = $("input#chkBTDigg").is(':checked');
	var chk_NewTorrents = $("input#chkNewTorrents").is(':checked');
	var chk_KickAssTorrents = $("input#chkKickAssTorrents").is(':checked');
	var chk_ThePirateBay = $("input#chkThePirateBay").is(':checked');
	var chk_OldPirateBay = $("input#chkOldPirateBay").is(':checked');
	var chk_l337x = $("input#chkl337x").is(':checked');
	var chk_h33t = $("input#chkh33t").is(':checked');
	var chk_Fenopy = $("input#chkFenopy").is(':checked');
	var chk_TorrentzEu = $("input#chkTorrentzEu").is(':checked');
	var chk_FilesTube = $("input#chkFilesTube").is(':checked');
	var chk_OZNzb = $("input#chkOZNzb").is(':checked');
	var chk_Popcorn = $("input#chkPopcorn").is(':checked');

    chrome.storage.sync.set({
        prefs: {
            chk_DogNZB: chk_DogNZB,
			chk_NZBsDotOrg: chk_NZBsDotOrg,
			chk_NZBIndex: chk_NZBIndex,
			chk_NZBKing: chk_NZBKing,
			chk_Binsearch: chk_Binsearch,
			chk_NzbFinder: chk_NzbFinder,
			chk_OMGWTFNZBz: chk_OMGWTFNZBz,
			chk_NzbSu: chk_NzbSu,
			chk_NZBGeek: chk_NZBGeek,
			chk_BTDigg: chk_BTDigg,
			chk_NewTorrents: chk_NewTorrents,
			chk_KickAssTorrents: chk_KickAssTorrents,
			chk_ThePirateBay: chk_ThePirateBay,
			chk_OldPirateBay: chk_OldPirateBay,
			chk_l337x: chk_l337x,
			chk_h33t: chk_h33t,
			chk_Fenopy: chk_Fenopy,
			chk_TorrentzEu: chk_TorrentzEu,
			chk_FilesTube: chk_FilesTube,
			chk_OZNzb: chk_OZNzb,
			chk_Popcorn: chk_Popcorn
        }
    });

	$("div#status").html("Options Saved!");
	setTimeout(function() {
		$("div#status").fadeOut('slow');
	}, 750);
	$("div#status").show();
}

function loadOptions() {
    chrome.storage.sync.get({
        prefs: {
            chk_DogNZB: false,
			chk_NZBsDotOrg: false,
			chk_NZBIndex: false,
			chk_NZBKing: false,
			chk_Binsearch: false,
			chk_NzbFinder: false,
			chk_OMGWTFNZBz: false,
			chk_NzbSu: false,
			chk_NZBGeek: false,
			chk_BTDigg: false,
			chk_NewTorrents: false,
			chk_KickAssTorrents: false,
			chk_ThePirateBay: false,
			chk_OldPirateBay: false,
			chk_l337x: false,
			chk_h33t: false,
			chk_Fenopy: false,
			chk_TorrentzEu: false,
			chk_FilesTube: false,
			chk_OZNzb: false,
			chk_Popcorn: false
        }
    },

	function(storage) {
		$("input#chkDogNZB").prop('checked',storage.prefs.chk_DogNZB);
		$("input#chkNZBsDotOrg").prop('checked',storage.prefs.chk_NZBsDotOrg);
		$("input#chkNZBIndex").prop('checked',storage.prefs.chk_NZBIndex);
		$("input#chkNZBKing").prop('checked',storage.prefs.chk_NZBKing);
		$("input#chkBinsearch").prop('checked',storage.prefs.chk_Binsearch);
		$("input#chkNzbFinder").prop('checked',storage.prefs.chk_NzbFinder);
		$("input#chkOMGWTFNZBz").prop('checked',storage.prefs.chk_OMGWTFNZBz);
		$("input#chkNzbSu").prop('checked',storage.prefs.chk_NzbSu);
		$("input#chkNZBGeek").prop('checked',storage.prefs.chk_NZBGeek);
		$("input#chkBTDigg").prop('checked',storage.prefs.chk_BTDigg);
		$("input#chkNewTorrents").prop('checked',storage.prefs.chk_NewTorrents);
		$("input#chkKickAssTorrents").prop('checked',storage.prefs.chk_KickAssTorrents);
		$("input#chkThePirateBay").prop('checked',storage.prefs.chk_ThePirateBay);
		$("input#chkOldPirateBay").prop('checked',storage.prefs.chk_OldPirateBay);
		$("input#chkl337x").prop('checked',storage.prefs.chk_l337x);
		$("input#chkh33t").prop('checked',storage.prefs.chk_h33t);
		$("input#chkFenopy").prop('checked',storage.prefs.chk_Fenopy);
		$("input#chkTorrentzEu").prop('checked',storage.prefs.chk_TorrentzEu);
		$("input#chkFilesTube").prop('checked',storage.prefs.chk_FilesTube);
		$("input#chkOZNzb").prop('checked',storage.prefs.chk_OZNzb);
		$("input#chkPopcorn").prop('checked',storage.prefs.chk_Popcorn);
	});
}

document.addEventListener('DOMContentLoaded', loadOptions());
document.querySelector('#save').addEventListener('click', saveOptions);
