/**

RoPro (https://ropro.io) v1.3

RoPro was wholly designed and coded by:
                               
,------.  ,--. ,-----.,------. 
|  .-.  \ |  |'  .--./|  .---' 
|  |  \  :|  ||  |    |  `--,  
|  '--'  /|  |'  '--'\|  `---. 
`-------' `--' `-----'`------' 
                            
Contact me:

Discord - Dice#1000
Email - dice@ropro.io
Phone - 650-318-1631

Write RoPro:

Dice Systems LLC
16192 Coastal Hwy
Lewes, Deleware 19958
United States

RoPro Terms of Service:
https://ropro.io/terms

RoPro Privacy Policy:
https://ropro.io/privacy-policy

© 2022 Dice Systems LLC
**/

var sandboxHTML = `
<div style="margin-top:4px;margin-left:15px;">
	<h1 style="display:inline-block;" class="ng-binding">RoPro Avatar Sandbox <img class="sandbox-icon-big" style="height:60px;margin-bottom:0px;" src="https://ropro.io/images/sandbox_icon.svg"></h1>
	<div id="upgradeCTA" style="margin-top:20px;float:right;display:inline-block;" class="upgrade-cta catalog-header"> <div style="display:inline-block;margin-right:5px;" class="ng-binding upgradeText">Upgrade to save your outfits!</div>
	<a style="display:inline-block;" class="btn-primary-md ng-binding upgradeButtonText" target="_blank" href="https://ropro.io#upgrade-standard">Upgrade</a> </div>
	<div style="pointer-events: none;position:relative;display:inline-block;float:left;max-height:610px;" id = "maincontent">
		<div style="pointer-events:initial;position:relative;width:970px;z-index:1;" class="sandbox-frame-full" id="sandboxFrame">
			<iframe class="sandbox-iframe" style="z-index:1;" id="sandboxView" src="https://ropro.io/3dviewer/?load"></iframe>
			<span id="fullscreenToggle" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.5'" style="opacity:0.5;position:absolute;bottom:10px;right:10px;z-index:100;width:40px;height:37px;" class="sandbox-fullscreen-toggle fullscreen toggle-three-dee btn-control btn-control-small ng-binding"><img id="fullscreenImage" src="https://ropro.io/images/fullscreen_0.png" style="height:20px;margin:-10px;" onclick=""></span>
			<div style="position: absolute; bottom: 10px; left: 10px; z-index: 100; " class="avatar-type-toggle pill-toggle ng-scope" data-toggle="tooltip" title="Switch between classic R6 avatar and more expressive next generation R15 avatar"> <input type="radio" id="radio-R6" value="R6" class="ng-pristine ng-untouched ng-valid ng-not-empty" name="15"> <label for="radio-R6">R6</label> <input type="radio" id="radio-R15" value="R15" class="ng-pristine ng-untouched ng-valid ng-not-empty" name="16"> <label for="radio-R15">R15</label> </div>
			</div>
			<div style="float:left;position:relative;width:277px;" id="wearing">
				<h5 style="padding-bottom:0px;" class="ng-binding"><span class="outfitCostText">Outfit Cost:</span> <span>
					<span id="outfitCostLoading" style="margin:-7px;transform: scale(0.6); width: 100px; height: 25px; visibility: initial !important;" class="spinner spinner-default"></span>
					<div id="outfitCostDiv" style="display:none;">
					<span style="margin-left:-5px;margin-right:-8px;margin-bottom:2px;transform: scale(0.6);" id="nav-robux" class="icon-robux-28x28 roblox-popover-close"></span>
					<span style="font-size:15px;" class="rbx-text-navbar-right text-header" id="outfitCostRobux">
				</span></div></span></h5>
				<h3 style="padding-bottom:0px;" class="ng-binding currentlyWearingText">Currently Wearing</h3>
				<p style="margin-top:-2px;font-size:13px;" class="ng-binding clickAnItemText">Click an item to unequip it.</p>
				<div style="line-height:0px;pointer-events:initial;" id="wearingContainer"></div>
			</div>
			<div style="position:relative;width:277px;" id="backgroundChoice">
			<div style="margin-top:5px;float:left;position:relative;width:277px;height:240px;pointer-events:initial;" id="roproMerch">
				<h3 style="padding-bottom:0px;" class="ng-binding"><span class="roproMerchText">RoPro Merch</span> </h3>
				
				<p id="merchSubtitle" style="margin-top:-2px;font-size:13px;" class="ng-binding merchText">Buy four or more shirts/pants to unlock a special "RoPro Donor" profile icon.</p>
				<div id="scrollLeft" style="margin-top: 70px; height: 170px; margin-left: 10px; width: 20px; display: block;" class="scroller prev disabled" role="button" aria-hidden="true"><div class="arrow"><span style="transform:scale(0.8);margin-left:-4px;" class="icon-games-carousel-left"></span></div></div>
				<div style="pointer-events:initial;line-height:0px;margin-top:5px;margin-left:-10px;" id="merchContainer">
				</div>
				<div id="scrollRight" style="margin-top: 70px; height: 170px; margin-right: 18px; width: 20px; display: block;" class="scroller next" role="button" aria-hidden="true"><div style="transform:scale(0.8);margin-right:-9px;" class="arrow"><span class="icon-games-carousel-right"></span></div></div>
			</div>
				<!--<h3 style="margin-top:5px;float:left;padding-bottom:0px;" class="ng-binding backgroundText">Background</h3>
				<p style="float:left;margin-top:-2px;font-size:13px;" class="ng-binding chooseBackgroundText">Choose a background below.</p>
				<div style="float:left;pointer-events:initial;" id="backgroundContainer">
				<div><div id="default" style="display:inline-block;width:50px;height:50px;margin:2px;" class="thumbnail-2d-container background-selector"><a style="position:relative;">
				<img class="item-card-thumb-container" style="width:100%;height:100%;" src="https://ropro.io/3dviewer/backgrounds/default_background.png">
				<img src="https://ropro.io/images/checkmark_done.gif" class="background-checkmark-image active" style="pointer-events:none;transform:scale(0.4);overflow:visible;width:164px;height:126px;position:absolute;right:-57px;top:-52px;">
				</a>
				</div></div>
				<div><div id="sky" style="display:inline-block;width:50px;height:50px;margin:2px;" class="thumbnail-2d-container background-selector"><a style="position:relative;">
				<img class="item-card-thumb-container" style="width:100%;height:100%;" src="https://ropro.io/3dviewer/backgrounds/sky_background.png">
				<img src="https://ropro.io/images/empty.png" class="background-checkmark-image active" style="pointer-events:none;transform:scale(0.4);overflow:visible;width:164px;height:126px;position:absolute;right:-57px;top:-52px;">
				</a>
				</div></div>
				<div><div id="crossroads" style="display:inline-block;width:50px;height:50px;margin:2px;" class="thumbnail-2d-container background-selector"><a style="position:relative;">
				<img class="item-card-thumb-container" style="width:100%;height:100%;" src="https://ropro.io/3dviewer/backgrounds/crossroads_background.png">
				<img src="https://ropro.io/images/empty.png" class="background-checkmark-image active" style="pointer-events:none;transform:scale(0.4);overflow:visible;width:164px;height:126px;position:absolute;right:-57px;top:-52px;">
				</a>
				</div></div>
				<div><div id="roblox_hq" style="display:inline-block;width:50px;height:50px;margin:2px;" class="thumbnail-2d-container background-selector"><a style="position:relative;">
				<img class="item-card-thumb-container" style="width:100%;height:100%;" src="https://ropro.io/3dviewer/backgrounds/roblox_hq_background.png">
				<img src="https://ropro.io/images/empty.png" class="background-checkmark-image active" style="pointer-events:none;transform:scale(0.4);overflow:visible;width:164px;height:126px;position:absolute;right:-57px;top:-52px;">
				</a>
				</div></div>
				<div><div id="trade_hangout" style="display:inline-block;width:50px;height:50px;margin:2px;" class="thumbnail-2d-container background-selector"><a style="position:relative;">
				<img class="item-card-thumb-container" style="width:100%;height:100%;" src="https://ropro.io/3dviewer/backgrounds/trade_hangout_background.png">
				<img src="https://ropro.io/images/empty.png" class="background-checkmark-image active" style="pointer-events:none;transform:scale(0.4);overflow:visible;width:164px;height:126px;position:absolute;right:-57px;top:-52px;">
				</a>
				</div></div>
				<div><div id="playground" style="display:inline-block;width:50px;height:50px;margin:2px;" class="thumbnail-2d-container background-selector"><a style="position:relative;">
				<img class="item-card-thumb-container" style="width:100%;height:100%;" src="https://ropro.io/3dviewer/backgrounds/playground_background.png">
				<img src="https://ropro.io/images/empty.png" class="background-checkmark-image active" style="pointer-events:none;transform:scale(0.4);overflow:visible;width:164px;height:126px;position:absolute;right:-57px;top:-52px;">
				</a>
				</div></div>
				<div><div id="shuttle2" style="display:inline-block;width:50px;height:50px;margin:2px;" class="thumbnail-2d-container background-selector"><a style="position:relative;">
				<img class="item-card-thumb-container" style="width:100%;height:100%;" src="https://ropro.io/3dviewer/backgrounds/shuttle2_background.png">
				<img src="https://ropro.io/images/empty.png" class="background-checkmark-image active" style="pointer-events:none;transform:scale(0.4);overflow:visible;width:164px;height:126px;position:absolute;right:-57px;top:-52px;">
				</a>
				</div></div>
				<div><div id="school" style="display:inline-block;width:50px;height:50px;margin:2px;" class="thumbnail-2d-container background-selector"><a style="position:relative;">
				<img class="item-card-thumb-container" style="width:100%;height:100%;" src="https://ropro.io/3dviewer/backgrounds/school_background.png">
				<img src="https://ropro.io/images/empty.png" class="background-checkmark-image active" style="pointer-events:none;transform:scale(0.4);overflow:visible;width:164px;height:126px;position:absolute;right:-57px;top:-52px;">
				</a>
				</div></div>
				<div><div id="oval_office" style="display:inline-block;width:50px;height:50px;margin:2px;" class="thumbnail-2d-container background-selector"><a style="position:relative;">
				<img class="item-card-thumb-container" style="width:100%;height:100%;" src="https://ropro.io/3dviewer/backgrounds/oval_office_background.png">
				<img src="https://ropro.io/images/empty.png" class="background-checkmark-image active" style="pointer-events:none;transform:scale(0.4);overflow:visible;width:164px;height:126px;position:absolute;right:-57px;top:-52px;">
				</a>
				</div></div>
				<div><div id="pirate" style="display:inline-block;width:50px;height:50px;margin:2px;" class="thumbnail-2d-container background-selector"><a style="position:relative;">
				<img class="item-card-thumb-container" style="width:100%;height:100%;" src="https://ropro.io/3dviewer/backgrounds/pirate_background.png">
				<img src="https://ropro.io/images/empty.png" class="background-checkmark-image active" style="pointer-events:none;transform:scale(0.4);overflow:visible;width:164px;height:126px;position:absolute;right:-57px;top:-52px;">
				</a>
				</div></div>-->
							<div style="margin-top:5px;float:left;position:relative;width:277px;" id="roproOutfits">
				<!--<h3 style="padding-bottom:0px;" class="ng-binding">RoPro Outfits </h3>
				<p style="margin-top:-2px;font-size:13px;" class="ng-binding">Try on pre-made outfits.</p>
				<div style="pointer-events:initial;" id="premadeOutfitContainer"></div>-->
			</div>
			<div style="pointer-events:initial;margin-top:5px;float:left;position:relative;width:277px;height:100px;" id="myOutfits">
				<h3 style="padding-bottom:0px;" class="ng-binding"><span class="myOutfitsText">My Outfits</span> <button id="createOutfitButton" type="button" class="btn-fixed-width-lg btn-growth-lg" style="margin-top:7px;background-color:#0084dd;border:0px;width:60px;font-size:15px;padding:2px;float:right;">Save</button></h3>
				<div style="display:none;" id="outfitNameGroup" class="outfit-input-group">
				<input id="outfitNameInput" style="border-radius:5px;margin-bottom:0px;margin-top:2px;padding-left:10px;" class="form-control input-field outfit-name-input" placeholder="Outfit Name" maxlength="50" ng-keypress="" ng-model="">
				<p style="margin-left:3px;margin-bottom:10px;font-size:12px;" class="ng-binding pressEnterKeyText">Press the enter key to submit outfit name.
				</p></div>
				<p id="outfitSubtitle" style="margin-top:-2px;font-size:13px;" class="ng-binding nameAndSaveText">Name and save your outfit.</p>
				<div style="pointer-events:initial;line-height:0px;" id="outfitContainer"></div>
			</div>
				</div>
			</div>
	</div>
	<div class="catalog-tabs" style="float:right;" id="catalogcontent">
		<a index="1" style="font-size:13px;" class="catalog-tab active">Limiteds</a>
		<a index="2" style="font-size:13px;" class="catalog-tab">Accessories</a>
		<a index="3" style="font-size:13px;" class="catalog-tab">UGC</a>
		<a index="4" style="font-size:13px;" class="catalog-tab">Body</a>
		<a index="5" style="font-size:13px;" class="catalog-tab">Clothing</a>
		<a index="6" style="font-size:13px;" class="catalog-tab">Characters</a>
		<a index="7" style="font-size:13px;" class="catalog-tab">Animations</a>
	</div>
	<div id="Limiteds">
	</div>
	<div id="Accessories">
	</div>
	<div id="UGC">
	</div>
	<div id="Body">
	</div>
	<div id="Clothing">
	</div>
	<div id="Characters">
	</div>
	<div id="Animations">
	</div>
</div>
`

var wearing = []
var wearingCostDict = {}
var wearingInfoDict = {}
var userID = 1
var playerType = "R15"

var sorts = {
	"Limiteds":{"Most Popular":"?Category=2&limit=30&Subcategory=2&SortType=1&SortAggregation=5", "All Limiteds":"?category=Collectibles&limit=30&subcategory=Collectibles", "Accessories":"?category=Collectibles&limit=30&subcategory=Accessories", "Faces":"?category=Collectibles&limit=30&subcategory=Faces"},
	"Accessories":{"All Accessories":"?category=Accessories&creatorTargetId=1&limit=30&subcategory=Accessories", "Hats": "?category=Accessories&creatorTargetId=1&limit=30&subcategory=HeadAccessories", "Hair": "?category=BodyParts&creatorTargetId=1&limit=30&subcategory=HairAccessories", "Face":"?category=Accessories&creatorTargetId=1&limit=30&subcategory=FaceAccessories", "Neck":"?category=Accessories&creatorTargetId=1&limit=30&subcategory=NeckAccessories", "Shoulder":"?category=Accessories&creatorTargetId=1&limit=30&subcategory=ShoulderAccessories", "Front":"?category=Accessories&creatorTargetId=1&limit=30&subcategory=FrontAccessories", "Back":"?category=Accessories&creatorTargetId=1&limit=30&subcategory=BackAccessories", "Waist":"?category=Accessories&creatorTargetId=1&limit=30&subcategory=WaistAccessories"},
	"UGC":{"All Accessories":"?category=CommunityCreations&limit=30&subcategory=CommunityCreations", "Hats": "?category=CommunityCreations&limit=30&subcategory=HeadAccessories", "Hair": "?category=CommunityCreations&limit=30&subcategory=HairAccessories", "Face":"?category=CommunityCreations&limit=30&subcategory=FaceAccessories", "Neck":"?category=CommunityCreations&limit=30&subcategory=NeckAccessories", "Shoulder":"?category=CommunityCreations&limit=30&subcategory=ShoulderAccessories", "Front":"?category=CommunityCreations&limit=30&subcategory=FrontAccessories", "Back":"?category=CommunityCreations&limit=30&subcategory=BackAccessories", "Waist":"?category=CommunityCreations&limit=30&subcategory=WaistAccessories"},
	"Body":{"Faces": "?category=BodyParts&limit=30&subcategory=Faces", "Heads":"?category=BodyParts&limit=30&subcategory=Heads"},
	"Clothing":{"Shirts":"?category=Clothing&limit=30&subcategory=ClassicShirts", "Pants":"?category=Clothing&limit=30&subcategory=ClassicPants", "T-Shirts": "?category=Clothing&limit=30&subcategory=ClassicTShirts"},
	"Characters":{"Characters":"?category=Characters&sortAggregation=5&sortType=2&limit=30"},
	"Animations":{"Animations":"?category=AvatarAnimations&subcategory=AvatarAnimations&sortAggregation=5&sortType=2&limit=30"}
	}
var subsort = {
	"Limiteds":["",""],
	"Accessories":["",""],
	"UGC":["",""],
	"Body":["",""],
	"Clothing":["",""],
	"Characters":["",""],
	"Animations":["",""]
	}
var cursors = {
	"Limiteds":["",""],
	"Accessories":["",""],
	"UGC":["",""],
	"Body":["",""],
	"Clothing":["",""],
	"Characters":["",""],
	"Animations":["",""]
	}
var currentTab = "Limiteds"
var currentSort = "Most Popular"
var currentPage = null
var activeTab = null
var pageLoading = false
var tabs = {}
var background = "default"
var currentAnimation = null

function fetchAssetsView(assetIds) {
	return new Promise(resolve => {
		function getURL(assetIds) {
			chrome.runtime.sendMessage({greeting: "GetURL", url:"https://avatar.roblox.com/v1/try-on/3d?assetIds="+assetIds.join(",")+"&addAccoutrements=false"}, 
				function(data) {
					if (JSON.stringify(assetIds) == JSON.stringify(wearing)) {
						if (data != "ERROR") {
							if (data.final) {
								resolve(data.url)
							} else {
								setTimeout(function(){
									getURL(assetIds)
								}, 3000)
							}
						} else {
							setTimeout(function(){
								getURL(assetIds)
							}, 3000)
						}
					} else {
						resolve("CANCELLED")
					}
				})
		}
		getURL([...assetIds])
	})
}

function fetchAssetsView2D(assetIds) {
	return new Promise(resolve => {
		function getURL(assetIds) {
			chrome.runtime.sendMessage({greeting: "GetURL", url:"https://avatar.roblox.com/v1/try-on/2d?assetIds="+assetIds.join(",")+"&width=420&height=420&format=png&addAccoutrements=false"}, 
				function(data) {
					if (data != "ERROR") {
						resolve(data.url)
					} else {
						setTimeout(function(){
							getURL(assetIds)
						}, 3000)
					}
				})
		}
		getURL(assetIds)
	})
}

function fetchMerch() {
	return new Promise(resolve => {
		chrome.runtime.sendMessage({greeting: "GetURL", url:"https://api.ropro.io/getMerch.php"},
			function(data) {
					resolve(data.split(','))
			})
	})
}

function fetchCurrentlyWearing(userId) {
	return new Promise(resolve => {
		chrome.runtime.sendMessage({greeting: "GetURL", url:"https://avatar.roblox.com/v1/users/"+userId+"/avatar"}, 
			function(data) {
					resolve(data)
			})
	})
}

function fetchBundleDetails(bundleId) {
	return new Promise(resolve => {
		chrome.runtime.sendMessage({greeting: "GetURL", url:"https://catalog.roblox.com/v1/bundles/details?bundleIds=" + bundleId}, 
			function(data) {
					resolve(data)
			})
	})
}

function fetchBundleDetailsBulk(bundleIds) {
	return new Promise(resolve => {
		chrome.runtime.sendMessage({greeting: "GetURL", url:"https://catalog.roblox.com/v1/bundles/details?bundleIds=" + bundleIds.join(",")}, 
			function(data) {
					resolve(data)
			})
	})
}

function fetchBundleThumbnailsBulk(bundleIds) {
	return new Promise(resolve => {
		chrome.runtime.sendMessage({greeting: "GetURL", url:"https://thumbnails.roblox.com/v1/bundles/thumbnails?size=420x420&format=Png&isCircular=false&bundleIds=" + bundleIds.join(",")}, 
			function(data) {
					resolve(data)
			})
	})
}

function fetchOutfitDetails(outfitId) {
	return new Promise(resolve => {
		chrome.runtime.sendMessage({greeting: "GetURL", url:"https://avatar.roblox.com/v1/outfits/" + outfitId + "/details"}, 
			function(data) {
					resolve(data)
			})
	})
}

function fetchPage(sort, keyword, cursor) {
	return new Promise(resolve => {
		chrome.runtime.sendMessage({greeting: "GetURL", url:"https://catalog.roblox.com/v1/search/items" + sort + "&cursor=" + cursor + "&keyword=" + keyword + "&includeNotForSale=true"}, 
			function(data) {
					resolve(data)
			})
	})
}

function createNewOutfit(outfitAssets, outfitName, outfitThumbnail, userId) {
	return new Promise(resolve => {
		chrome.runtime.sendMessage({greeting: "GetURL", url:"https://api.ropro.io/createOutfit.php?userid=" + userId + "&outfitAssets=" + outfitAssets.join(",") + "&outfitName=" + outfitName + "&outfitThumbnail=" + outfitThumbnail}, 
			function(data) {
					resolve(data)
			})
	})
}

function updateThumbnail(userID, outfitAssets, newThumbnail) {
	return new Promise(resolve => {
		chrome.runtime.sendMessage({greeting: "GetURL", url:"https://api.ropro.io/updateOutfitThumbnail.php?userid=" + userID + "&outfitAssets=" + outfitAssets.join(",") + "&outfitThumbnail=" + newThumbnail}, 
			function(data) {
					resolve(data)
			})
	})
}

function deleteOutfit(userID, outfitAssets) {
	return new Promise(resolve => {
		chrome.runtime.sendMessage({greeting: "GetURL", url:"https://api.ropro.io/deleteOutfit.php?userid=" + userID + "&outfitAssets=" + outfitAssets.join(",")}, 
			function(data) {
					resolve(data)
			})
	})
}

function fetchDetails(items) {
	return new Promise(resolve => {
		chrome.runtime.sendMessage({greeting: "PostValidatedURL", url:"https://catalog.roblox.com/v1/catalog/items/details", jsonData: JSON.stringify(items)}, 
			function(data) {
				if (data != null) {
					resolve(data)
				} else {
					itemArray = {"data": []}
					for (i = 0; i < items.items.length; i++) {
						itemArray["data"].push({
							"id": items.items[i].id,
							"itemType": "Asset",
							"assetType": 18,
							"name": "",
							"description": "",
							"productId": -1,
							"genres": [
							  "TownAndCity"
							],
							"itemStatus": [],
							"creatorType": "User",
							"creatorTargetId": 1,
							"creatorName": "ROBLOX",
							"lowestPrice": -1,
							"unitsAvailableForConsumption": 0,
							"favoriteCount": 0,
							"offSaleDeadline": null
						  })
					}
					resolve(itemArray)
				}
			})
	})
}

function fetchSetting(setting) {
	return new Promise(resolve => {
		chrome.runtime.sendMessage({greeting: "GetSetting", setting: setting}, 
			function(data) {
				resolve(data)
			}
		)
	})
}

function fetchOutfits(userID) {
	return new Promise(resolve => {
		chrome.runtime.sendMessage({greeting: "GetURL", url:"https://api.ropro.io/loadOutfits.php?userid=" + userID}, 
			function(data) {
					resolve(data)
			})
	})
}

function fetchAssetDetails(assetId) {
	return new Promise(resolve => {
		chrome.runtime.sendMessage({greeting: "GetURL", url:"https://api.roblox.com/marketplace/productinfo?assetId=" + assetId}, 
			function(data) {
					resolve(data)
			})
	})
}

function fetchLimitedSellers(assetId) {
	return new Promise(resolve => {
		chrome.runtime.sendMessage({greeting: "GetURL", url:"https://economy.roblox.com/v1/assets/" + assetId + "/resellers?cursor=&limit=10"}, 
			function(data) {
					resolve(data)
			})
	})
}

function getStorage(key) {
	return new Promise(resolve => {
		chrome.storage.sync.get(key, function (obj) {
			resolve(obj[key])
		})
	})
}

function getUserId() {
	return new Promise(resolve => {
		chrome.runtime.sendMessage({greeting: "GetUserID"}, 
			function(data) {
				resolve(data)
			}
		)
	})
}

function addCommas(nStr){
	nStr += '';
	var x = nStr.split('.');
	var x1 = x[0];
	var x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}

function totalOutfitCost() {
	total = 0
	offsale = 0
	for (key in wearingCostDict) {
		if (wearingCostDict[key] != null) {
			total += wearingCostDict[key]
		} else {
			offsale += 1
		}
	}
	return [total, offsale]
}

function stripTags(s) {
	if (typeof s == "undefined") {
		return s
	}
	return s.replace(/(<([^>]+)>)/gi, "").replace(/</g, "").replace(/>/g, "").replace(/'/g, "").replace(/"/g, "").replace(/`/g, "");
 }

 var merchCount = 0
 var merchStep = 3
 var merchPage = 0

 async function addMerch(id, name, price) {
	merchCount++
	merchContainer = document.getElementById('merchContainer')
	merchHTML = `<div style="float:left;margin-left:1px;margin-right:1px;"><div style="width:76px;" class="item-card-container remove-panel"><div class="item-card-link">
	<a class="item-card-thumb-container">
	<thumbnail-2d id="${parseInt(id)}" type="Asset" style="overflow:visible;height:76px;width:76px;position:relative;" class="item-card-thumb-container item-card-thumb ng-isolate-scope  ${parseInt(id)}">
	<span class="thumbnail-2d-container">
	<img class="item-card-image" style="height:76px;width:76px;position:absolute;margin-left:5px;margin-top:5px;" src="https://api.ropro.io/getAssetThumbnail.php?id=${parseInt(id)}"></span>
	<img style="pointer-events:none;transform:scale(0.4);overflow:visible;width:164px;height:126px;position:absolute;right:-50px;top:-35px;" class="checkmark-image " src="https://ropro.io/images/checkmark_start.png">
	</thumbnail-2d> </a> </div> <div style="width:76px;" class="item-card-caption"> <div class="item-card-equipped ng-hide"> <div class="item-card-equipped-label"></div>
	<span class="icon-check-selection"></span> </div>
	<a target="_blank" href="https://www.roblox.com/catalog/${parseInt(id)}/item" class="item-card-name-link">
	<div style="float:left;margin-top:5px;font-size:13px;width:85px;" title="${stripTags(name)}" class="text-overflow item-card-name ng-binding">${stripTags(name)}</div>
	<div class="action-button"><button type="button" class="btn-fixed-width btn-growth-sm " style="width:80px;height:30px;margin-top:0px;"><div class="text-overflow item-card-price font-header-2 text-subheader margin-top-none" style="float:left;margin-top:-3px;margin-left:7px;">
	<span style="margin-top:-2px;" class="icon icon-robux-white-16x16"></span><span style="margin-left:4px;color:white;" class="text-robux-tile">${parseInt(price)}</span></div></button></div>
	</a></div></div></div>`
	li = document.createElement('li')
	li.setAttribute('style', 'height: 170px; width: 76px; margin-left: 10px; margin-right: 5px; display: inline-block;')
	li.classList.add("ropro-merch")
	if (merchCount > merchStep) {
		li.style.display = "none"
	}
	li.innerHTML = merchHTML
	li.getElementsByClassName('item-card-thumb')[0].addEventListener('click', async function() {
		if ($(this).find('.checkmark-image').attr('class').includes('active')) {
			$(this).find('.checkmark-image').attr('src','https://ropro.io/images/checkmark_end.png')
			$(this).find('.checkmark-image').removeClass('active')
			removeItem(parseInt($(this).attr('id')))
		} else {
			$(this).find('.checkmark-image').addClass('active')
			$(this).find('.checkmark-image').attr('src','https://ropro.io/images/checkmark.png')
			function changeImage(checkmark) {
				setTimeout(function(){
					$(checkmark).find('.checkmark-image').attr('src','https://ropro.io/images/checkmark_done.gif')
				}, 400)
			}
			changeImage(this)
			addItem(parseInt($(this).attr('id')))
		}
	})
	merchContainer.appendChild(li)
 }

async function calculateCost(assetId) {
	document.getElementById("outfitCostLoading").style.display = "inline-block"
	document.getElementById("outfitCostDiv").style.display = "none"
	if (assetId != -1) {
		assetDetails = await fetchAssetDetails(assetId)
		$(".wearing-" + assetId).html(stripTags(assetDetails.Name))
		wearingInfoDict[assetId] = stripTags(assetDetails.Name)
		if (assetDetails.IsLimited || assetDetails.IsLimitedUnique) {
			limitedSellers = await fetchLimitedSellers(assetId)
			if (limitedSellers.data.length > 0) {
				wearingCostDict[assetId] = limitedSellers.data[0].price
				$(".wearing-robux-" + assetId).html(addCommas(limitedSellers.data[0].price))
			} else {
				wearingCostDict[assetId] = null
				$(".wearing-robux-" + assetId).html("Offsale")
			}
		} else {
			if (assetDetails.PriceInRobux != null) {
				wearingCostDict[assetId] = assetDetails.PriceInRobux
				$(".wearing-robux-" + assetId).html(addCommas(assetDetails.PriceInRobux))
			} else {
				wearingCostDict[assetId] = null
				$(".wearing-robux-" + assetId).html("Offsale")
			}
		}
	}
	cost = totalOutfitCost()
	if (cost[1] == 0) {
		costString = addCommas(parseInt(cost[0]))
	} else {
		costString = addCommas(parseInt(cost[0])) + "<b style='font-size:10px;'> + " + parseInt(cost[1]) + " offsale</b>"
	}
	document.getElementById("outfitCostRobux").innerHTML = costString
	document.getElementById("outfitCostLoading").style.display = "none"
	document.getElementById("outfitCostDiv").style.display = "inline-block"
}

function addOutfit(userID, assets, name, thumbnail) {
	outfitHTML = `<div class="outfit-delete" style="z-index:10000;position:absolute;top:-8px;right:-8px;white-space:nowrap;"><a><img style="z-index:10000;height:15px;" src="https://ropro.io/images/close_button.png"></a></div>
				<div class="outfit-name input-group input-field">${stripTags(name)}</div>
				<div assets='${JSON.stringify(assets)}' outfit-name="${stripTags(name)}" style="display:inline-block;width:50px;height:50px;margin:2px;" class="thumbnail-2d-container outfit-selector"><a style="position:relative;">
				<img class="item-card-thumb-container" style="width:100%;height:100%;" src="${stripTags(thumbnail)}">
				</a>
				</div>`
	div = document.createElement('div')
	div.setAttribute('class', 'outfit-div')
	div.setAttribute('style', 'display:inline-block;width:50px;height:50px;position:relative;margin:2px;')
	div.innerHTML = outfitHTML
	document.getElementById('outfitContainer').insertBefore(div, document.getElementById('outfitContainer').childNodes[0])
	div.getElementsByClassName('outfit-delete')[0].addEventListener('click', function() {
		this.parentNode.remove();
		deleteOutfit(userID, assets);
	});
	div.getElementsByClassName('outfit-selector')[0].addEventListener('click', function() {
		for (i = 0; i < wearing.length; i++) {
			delete wearingCostDict[wearing[i]]
		}
		calculateCost(-1)
		wearing = []
		addItemBulk(assets)
	})
	if (thumbnail == "https://t2.rbxcdn.com/ffc3cf81492f26555592d46357f0658e" || thumbnail == "") {
		updateOutfitThumbnail(userID, div, assets);
	}
	return div
}

async function updateOutfitThumbnail(userID, div, outfitAssets) {
	setTimeout(async function() {
		url = await fetchAssetsView2D(outfitAssets)
		url = stripTags(url)
		if (url == 'https://t2.rbxcdn.com/ffc3cf81492f26555592d46357f0658e') {
			updateOutfitThumbnail(userID, div, outfitAssets)
		} else {
			div.getElementsByTagName('img')[1].setAttribute('src', url);
			await updateThumbnail(userID, outfitAssets, url);
		}
	}, 5000)
}

async function createOutfit(name) {
	outfitAssets = [...wearing]
	url = await fetchAssetsView2D(outfitAssets)
	userId = await getUserId()
	createOutfitReq = await createNewOutfit(outfitAssets, stripTags(name), url, userId)
	if (createOutfitReq == "1") {
		div = addOutfit(userId, outfitAssets, stripTags(name), url)
		updateOutfitThumbnail(userId, div, outfitAssets)
		document.getElementById('outfitSubtitle').innerHTML = chrome.i18n.getMessage("SuccessfullyCreatedOutfit")
		document.getElementById('outfitNameGroup').style.display = "none"
		document.getElementById('createOutfitButton').innerHTML = "Save"
		document.getElementById('outfitSubtitle').style.display = "block"
		document.getElementById('outfitNameInput').value = ""
	} else {
		document.getElementById('outfitSubtitle').innerHTML = "Error: You already have this outfit."
		document.getElementById('outfitNameGroup').style.display = "none"
		document.getElementById('createOutfitButton').innerHTML = "Save"
		document.getElementById('outfitSubtitle').style.display = "block"
		document.getElementById('outfitNameInput').value = ""
	}
}

const paidList = () => {
	let paidItems = []
	const addPaidItem = (item) => {
		paidItems.push(item)
	}
	const getPaidItems = () => {
		return paidItems
	}
	return {
		addPaidItem,
		getPaidItems
	}
}

const paidItemsList = paidList()

function createItem(name, assetId, price, limited, limitedU, itemType, thumbnail) {
	li = document.createElement('li')
	li.style.height = "200px"
	li.style.width = "126px"
	li.style.marginLeft = "5px"
	li.style.marginRight = "5px"
	li.style.display = "inline-block"
	if (wearing.includes(assetId)) {
		active = "active"
		src = "https://ropro.io/images/checkmark_done.gif"
	} else {
		active = ""
		src = "https://ropro.io/images/checkmark_start.png"
	}
	if (thumbnail.length == 0) {
		thumbnail = `https://api.ropro.io/getAssetThumbnail.php?id=${parseInt(assetId)}`
	}
	if (itemType == "Bundle") {
		subdirectory = "bundles"
	} else {
		subdirectory = "catalog"
	}
	if ((itemType == "Bundle" || itemType == "61") && price != "Free") {
		paidItemsList.addPaidItem(parseInt(assetId))
	}
	itemHTML = `<div style="float:left;margin-left:1px;margin-right:1px;"><div class="item-card-container remove-panel"><div class="item-card-link">
	<a class="item-card-thumb-container">
	<thumbnail-2d id=${parseInt(assetId)} type="${stripTags(itemType)}" style="overflow:visible;height:126px;width:126px;position:relative;" class="item-card-thumb-container item-card-thumb ng-isolate-scope ${active} ${parseInt(assetId)}">
	<span class="thumbnail-2d-container">
	<img class="item-card-image" style="height:126px;width:126px;position:absolute;" src="${stripTags(thumbnail)}">
	${(itemType == "Bundle" || itemType == "61") && price != "Free" ? `<img class="standard-icon-image" style="height:50px;width:50px;position:absolute;left:0px;bottom:0px;" src="https://ropro.io/images/standard_icon_shadow.png">` : ``}
	</span>
	<img style="pointer-events:none;transform:scale(0.4);overflow:visible;width:164px;height:126px;position:absolute;right:-50px;top:-35px;" class="checkmark-image ${active}" src="${src}">
	</thumbnail-2d> </a> </div> <div class="item-card-caption"> <div class="item-card-equipped ng-hide"> <div class="item-card-equipped-label"></div>
	<span class="icon-check-selection"></span> </div>
	<a target="_blank" href="https://www.roblox.com/${subdirectory}/${parseInt(assetId)}/item" class="item-card-name-link">
	<div style="float:left;margin-top:5px;" title="${stripTags(name)}" class="text-overflow item-card-name ng-binding">${stripTags(name)}</div>
	${price == "" ? `` : `<div class="text-overflow item-card-price font-header-2 text-subheader margin-top-none">
	${price == "Offsale" || price == "Free" ? '' : '<span class="icon icon-robux-16x16"></span><span style="margin-left:4px;" class="text-robux-tile">'}${price == "Offsale" ? stripTags(price) : price == "Free" ? stripTags(price) : addCommas(parseInt(price))}
	</span></div>`}
	</a></div></div></div>`
	li.innerHTML = itemHTML
	return li
}

function createTab(tabName) {
tabList = ""
firstTab = null
count = 1
for (sort in sorts[tabName]) {
	if (firstTab == null) {
		firstTab = sort
	}
	if (activeTab == null) {
		activeTab = tabName
		currentTab = tabName
		currentSort = Object.keys(sorts[tabName])[0]
	}
	tabList += `<li class="dropdown-custom-item" class="ng-scope"> <a style="font-size:13px;">${stripTags(sort)}</a></li>`
	count++
}

div = document.createElement("div")
tabHTML = `
<div id="navbar-universal-search" style="margin-top:10px;margin-right:14px;float:right;width:680px;" role="search">
   <div class="search-container">
      <div class="input-group">
         <input style="width:530px;unicode-bidi:bidi-override!important;direction:LTR!important;" class="input-field sandbox-search" placeholder="Search" maxlength="50"> 
         <div style="width:150px;" class="input-group-btn">
            <button style="height:38px;" type="button" class="input-dropdown-btn category-options ng-scope"> <span style="font-size:13px;" class="text-overflow rbx-selection-label ng-binding">${stripTags(firstTab)}</span> <span class="icon-down-16x16"></span> </button> 
            <ul page="0" style="width:150px;display:block;" class="dropdown_menu dropdown_menu-4 dropdown-menu dropdown-custom">
				${tabList}
            </ul>
            <button class="sandbox-search-button input-addon-btn" type="submit"> <span class="icon-search"></span> </button> 
         </div>
      </div>
   </div>
</div>`

itemContentHTML = `
<div style="width:680px;min-height:50px;margin-right:14px;float:right;margin-top:10px;" class="item-content">
<ul page="0" class="item-list hlist item-cards-stackable">
<span style="float: center; display: block; width: 100px; height: 25px; visibility: initial !important;margin:auto;margin-top:35px;" class="spinner spinner-default"></span>
</ul>
</div>
`

div.innerHTML = tabHTML + itemContentHTML
return div
}

function createUpgradeModal() {
    modalDiv = document.createElement('div')
    modalDiv.setAttribute('id', 'standardUpgradeModal')
    modalDiv.setAttribute('class', 'upgrade-modal')
    modalDiv.style.zIndex = 100000
    modalHTML = `<div id="standardUpgradeModal" style="z-index:10000;display:block;" class="upgrade-modal"><div style="background-color:#232527;position:absolute;width:500px;height:500px;left:-webkit-calc(50% - 250px);top:-webkit-calc(50% - 250px);" class="modal-content upgrade-modal-content">
    <span style="margin-top:5px;margin-right:5px;font-size:40px;" class="upgrade-modal-close">×</span>
    <h2 style="padding-bottom:5px;border-bottom: 3px solid #FFFFFF;font-family:HCo Gotham SSm;color:white;font-size:30px;position:absolute;top:20px;left:40px;"><img style="width:70px;left:0px;" src="https://ropro.io/images/standard_icon.png"> Standard Tier Feature</h2><div style="font-family:HCo Gotham SSm;color:white;font-size:17px;position:absolute;top:115px;left:200px;width:270px;">Trying on paid Animations/Characters & saving Sandbox Outfits is only available for<br><b><img style="width:20px;margin-top:-3px;margin-right:3px;" src="https://ropro.io/images/standard_icon.png">RoPro Standard Tier+</b><br>subscribers.</div><div style="font-family:HCo Gotham SSm;color:white;font-size:18px;position:absolute;top:270px;left:200px;width:270px;"><u>More Subscription Benefits:</u>
    <ul style="margin-left:20px;font-size:12px;font-family:HCo Gotham SSm;">
    <li style="list-style-type:circle;">Fastest Server &amp; Server Size Sort</li>
    <li style="list-style-type:circle;">More Game Filters &amp; Like Ratio Filter</li><li style="list-style-type:circle;">Trade Value &amp; Demand Calculator</li><li style="list-style-type:circle;">More Game Playtime Sorts</li><li style="list-style-type:circle;">And many more! Find a full list <a style="text-decoration:underline;cursor:pointer;" href="https://ropro.io#standard" target="_blank">here</a>.</li></ul>
    </div><video width="70%" height="100%" style="pointer-events: none;position:absolute;top:10px;left:-70px;transform:scale(2);" src="" autoplay="" loop="" muted=""></video>
    <a href="https://ropro.io#standard" target="_blank"><button type="button" style="font-family:HCo Gotham SSm;position:absolute;left:25px;top:440px;width:450px;" class="btn-growth-sm PurchaseButton">Upgrade</button></a>
    </div></div>`
    modalDiv.innerHTML += modalHTML
    body = document.getElementsByTagName('body')[0]
    body.insertBefore(modalDiv, body.childNodes[0])
    $('.upgrade-modal-close').click(function(){
        document.getElementById('standardUpgradeModal').remove()
    })
}

function upgradeModal() {
    createUpgradeModal()
    document.getElementById('standardUpgradeModal').getElementsByTagName('video')[0].src = `https://ropro.io/dances/dance${(Math.floor(Math.random() * 18) + 1)}.webm`
    document.getElementById('standardUpgradeModal').style.display = "block"
}

var bundleThumbnails = {}

async function updatePage(cursor, keyword, back) {
	setTimeout(function(){
		pageLoading = false
	},500)
	if (pageLoading == false) {
		pageLoading = true
		mySort = sorts[currentTab][currentSort]
		catalogPage = await fetchPage(mySort, keyword, cursor)
		if (catalogPage != null) {
			itemDetails = await fetchDetails({"items":catalogPage.data})
			itemList = currentPage.getElementsByClassName('item-list')[0]
			newCursor = catalogPage.nextPageCursor
			oldCursor = catalogPage.previousPageCursor
			cursors[currentTab][0] = oldCursor
			cursors[currentTab][1] = newCursor
			loadedFlag = false
			itemList.innerHTML = `<span style="float: center; display: block; width: 100px; height: 25px; visibility: initial !important;margin:auto;margin-top:35px;" class="spinner spinner-default"></span>`
			bundleIds = []
			bundleItems = []
			for (i = 0; i < itemDetails.data.length; i++) {
				item = itemDetails.data[i]
				if (typeof item.lowestPrice != 'undefined') {
					if (item.lowestPrice == -1) {
						price = ""
					} else {
						price = item.lowestPrice
					}
				} else if (item.priceStatus == "No Resellers") {
					price = "No Sellers"
				} else {
					if (item.priceStatus != "Offsale") {
						price = item.price > 0 ? item.price : "Free"
					} else {
						price = "Offsale"
					}
				}
				if (item.itemType != "Bundle") {
					if (loadedFlag == false) {
						loadedFlag = true
						itemList.innerHTML = ""
					}
					if (item.assetType != 19) {
						itemElement = createItem(stripTags(item.name), item.id, price, false, false, parseInt(item.assetType).toString(), "")
						itemList.innerHTML += itemElement.outerHTML
					}
				} else {
					bundleIds.push(item.id)
					bundleItems.push(item)
				}
			}
			if (itemDetails.data.length == 0) {
				if (loadedFlag == false) {
					loadedFlag = true
					itemList.innerHTML = ""
				}
			}
			if (bundleIds.length > 0) {
				bundles = await fetchBundleDetailsBulk(bundleIds)
				thumbs = await fetchBundleThumbnailsBulk(bundleIds)
				for (i = 0; i < thumbs.data.length; i++) {
					bundleThumbnails[parseInt(thumbs.data[i].targetId)] = thumbs.data[i].imageUrl
				}
				for (i = 0; i < bundles.length; i++) {
					item = bundleItems[i]
					userOutfitId = -1
					bundle = bundles[i]
					price = bundle.product.priceInRobux
					if (price == null) {
						if (bundle.product.noPriceText == "Free") {
							price = "Free"
						} else {
							price = "Offsale"
						}
					}
					for (j = 0; j < bundle.items.length; j++) {
						bundleItem = bundle.items[j]
						if (bundleItem.type == "UserOutfit") {
							userOutfitId = bundleItem.id
						}
					}
					if (loadedFlag == false) {
						loadedFlag = true
						itemList.innerHTML = ""
					}
					itemElement = createItem(stripTags(item.name), item.id, price, false, false, "Bundle", stripTags(bundleThumbnails[bundle.id]))
					itemList.innerHTML += itemElement.outerHTML
				}
			}
			prevPage = itemList.getAttribute("page")
			if (cursor == "" & !back) {
				prevPage = 0
			}
			if (!back) {
				itemList.setAttribute("page", (parseInt(prevPage) + 1).toString())
			} else {
				itemList.setAttribute("page", (parseInt(prevPage) - 1).toString())
			}
			page = itemList.getAttribute("page")
			if (page == "1") {
				disabledString = "disabled"
			} else {
				disabledString = ""
			}
			if (newCursor == null) {
				disabledString2 = "disabled"
			} else {
				disabledString2 = ""
			}
			pagerHTML = `
			<div class="pager-holder" cursor-pagination="pager" ng-show="paginations.isEnabled">
				<ul class="pager">
				<li class="pager-prev ${disabledString}">
				<a class="prev-page"><span class="icon-back"></span></a></li>
				<li><span cursor="" class="page-num-text">Page ${parseInt(page)}</span> </li>
				<li class="pager-next ${disabledString2}">
				<a class="next-page">
				<span class="icon-next"></span></a> </li>
				</ul></div>
			</div>
			`
			itemList.innerHTML += pagerHTML
			$(itemList).find('.item-card-thumb').click(async function() {
				if ($(this).attr('class').includes('active')) {
					$(this).find('.checkmark-image').attr('src','https://ropro.io/images/checkmark_end.png')
					$(this).find('.checkmark-image').removeClass('active')
					if ($(this).attr('type') == "Bundle") {
						bundleDetails = await fetchBundleDetails($(this).attr('id'))
						bundleItems = bundleDetails[0].items
						bundleAssetIds = []
						for (i = 0; i < bundleItems.length; i++) {
							item = bundleItems[i]
							if (item.type == "Asset") {
								//if (!item.name.includes("Animation") && !item.name.includes("Rthro")) {
									bundleAssetIds.push(item.id)
								//}
							}
						}
						removeItemBulk(bundleAssetIds)
					} else {
						removeItem(parseInt($(this).attr('id')))
					}
				} else {
					if (paidItemsList.getPaidItems().includes(parseInt($(this).attr('id'))) && !await fetchSetting("sandboxOutfits")) {
						upgradeModal()
					} else {
						$(this).find('.checkmark-image').addClass('active')
						$(this).find('.checkmark-image').attr('src','https://ropro.io/images/checkmark.png')
						function changeImage(checkmark) {
							setTimeout(function(){
								$(checkmark).find('.checkmark-image').attr('src','https://ropro.io/images/checkmark_done.gif')
							}, 400)
						}
						changeImage(this)
						if ($(this).attr('type') == "Bundle") {
							bundleDetails = await fetchBundleDetails($(this).attr('id'))
							bundleItems = bundleDetails[0].items
							animationItems = []
							bundleAssetIds = []
							for (i = 0; i < bundleItems.length; i++) {
								item = bundleItems[i]
								if (item.type == "UserOutfit") {
									outfitDetails = await fetchOutfitDetails(item.id)
									assets = outfitDetails.assets
									for (j = 0; j < assets.length; j++) {
										asset = assets[j]
										if ((!asset.assetType.name.includes("Animation")) || currentTab == "Animations") {
											if (asset.assetType.name.includes("Animation")) {
												animationItems.push(asset)
											} else {
												bundleAssetIds.push(asset.id)
											}
										}
									}
								}
							}
							addItemBulk(bundleAssetIds)
							if (animationItems.length > 0) {
								ul = document.createElement('ul')
								ul.setAttribute('style', 'cursor:default;color:white;background-color:#191B1D;padding:10px;position:absolute;top:-25px;width:200px;border-radius:15px;z-index:1000;')
								ul.innerHTML = `<li style="margin-bottom:5px;"><u><b>Select Animation</b></u></li>`
								for (b = 0; b < animationItems.length; b++) {
									li = document.createElement('li')
									li.style.cursor = "pointer"
									li.setAttribute('itemid', '' + parseInt(animationItems[b].id))
									li.innerHTML = `<img src="https://api.ropro.io/getAssetThumbnail.php?id=${parseInt(animationItems[b].id)}" style="width:30px;margin-right:5px;">${stripTags(animationItems[b].name)}`
									ul.appendChild(li)
									li.addEventListener('click', function() {
										addItem(parseInt(this.getAttribute('itemid')))
										this.parentNode.remove()
									})
								}
								this.parentNode.appendChild(ul)
							}
						} else {
							addItem(parseInt($(this).attr('id')))
						}
					}
				}
				$(this).toggleClass('active')
			})
			$(itemList).find('.next-page').click(function() {
				currentTab = $(this).closest('.item-list').get(0).parentNode.parentNode.parentNode.id
				if (pageLoading == false) {
					if (!this.parentNode.classList.contains("disabled")) {
						updatePage(cursors[currentTab][1], keyword, false)
					}
				}
			})
			$(itemList).find('.prev-page').click(function() {
				if (pageLoading == false) {
					if (!this.parentNode.classList.contains("disabled")) {
						updatePage(cursors[currentTab][0], keyword, true)
					}
				}
			})
		}
	}
}

/**		itemList = currentPage.getElementsByClassName('item-list')[0]
		itemList.innerHTML = `<div style="width:100px;margin:auto;"><img style="margin-top:0px;width:100px;" src="https://ropro.io/images/standard_icon.png"></div>
		<h3 style="text-align:center;">
			To try on Bundles, you must be a RoPro subscriber. <a style="display:inline-block;" class="btn-primary-md ng-binding" target="_blank" href="https://ropro.io#upgrade-standard">Upgrade</a>
		</h3>`
		upgradeModal() */

function updateCurrentlyWearing() {
	wearingContainer = document.getElementById('wearingContainer')
	wearingContainer.innerHTML = ""
	for (i = 0; i < wearing.length; i++) {
		item = parseInt(stripTags(wearing[i].toString()))
		div = document.createElement("div")
		div.innerHTML += `<div class="wearing-name input-group input-field"><a style="font-size:13px;font-weight:bold;" class="wearing-${item}" href="https://roblox.com/catalog/${item}/item">${stripTags(wearingInfoDict[item])}</a>
		<br><div id="outfitCostDiv" style="margin-top:-10px;display: inline-block;">
		<span style="margin-left:-5px;margin-right:-8px;margin-bottom:0px;transform: scale(0.4);" id="nav-robux" class="icon-robux-28x28 roblox-popover-close"></span>
		<span style="font-size:12px;" class="rbx-text-navbar-right text-header wearing-robux-${item}">${wearingCostDict[item] == null ? "Offsale" : addCommas(parseInt(wearingCostDict[item]))}</span></div>
		</div>
		<div style="display:inline-block;width:50px;height:50px;" class="thumbnail-2d-container wearing-card">
		<a><img itemid="${item}" class="item-card-thumb-container ${item}" style="width:100%;height:100%;" src="https://api.ropro.io/getAssetThumbnail.php?id=${parseInt(item)}">
		</a></div>`
		div.setAttribute("class", "wearing-div")
		wearingContainer.appendChild(div)
		itemImage = div.getElementsByTagName("img")[0]
		function listen(itemImage) {
			itemImage.addEventListener("click", function(){
				itemID = itemImage.getAttribute("itemid")
				removeItem(parseInt(itemID))
			})
		}
		listen(itemImage)
	}
}

async function loadWearing() {
	updateCurrentlyWearing()
	document.getElementById('sandboxView').contentWindow.postMessage({action: "set_wearing", items: wearing}, "https://ropro.io")
}

async function switchPlayerType(type) {
	updateCurrentlyWearing()
	document.getElementById('sandboxView').contentWindow.postMessage({action: "switch_player_type", type: type}, "https://ropro.io")
}

var userID;

async function loadCurrentlyWearing() {
	userID = await getStorage("rpUserID")
	console.log(userID)
	document.getElementById('sandboxView').src = "https://ropro.io/sandbox_test/?user=" + userID + "&background=" + background
	currentlyWearing = await fetchCurrentlyWearing(userID)
	playerType = currentlyWearing.playerAvatarType
	if (playerType == "R6") {
		document.getElementById('radio-R6').click()
	} else {
		document.getElementById('radio-R15').click()
	}
	document.getElementById('radio-R6').addEventListener('click', function() {
		document.getElementById('radio-R15').checked = false
		switchPlayerType("R6")
		playerType = "R6"
	})
	document.getElementById('radio-R15').addEventListener('click', function() {
		document.getElementById('radio-R6').checked = false
		switchPlayerType("R15")
		playerType = "R15"
	})
    assets = currentlyWearing.assets
    for (i = 0; i < assets.length; i++) {
        asset = assets[i]
        if (!asset.assetType.name.includes("Animation")) {
            wearing.push(asset.id)
            calculateCost(asset.id)
        }
    }
	loadWearing()
	//Do outfit loading
	//if (await fetchSetting("sandboxOutfits")) {
		outfits = await fetchOutfits(userID);
		outfitsJSON = JSON.parse(outfits);
		for (i = 0; i < outfitsJSON.length; i++) {
			outfit = outfitsJSON[i];
			items = stripTags(outfit.items)
			if (items.length > 0) {
				itemsArray = items.split(",");
			} else {
				itemsArray = [];
			}
			addOutfit(userID, itemsArray, stripTags(outfit.name), outfit.thumbnail);
		}
	//}
}

async function addItem(assetId) {
	if (paidItemsList.getPaidItems().includes(assetId) && !await fetchSetting("sandboxOutfits")) {
	} else {
		if (activeTab == "Animations") {
			if (currentAnimation != null) {
				removeItem(currentAnimation)
				$('.'+currentAnimation).toggleClass('active')
			}
			currentAnimation = assetId
			if (playerType == "R6") {
				document.getElementById('radio-R6').checked = false
				document.getElementById('radio-R15').checked = true
				switchPlayerType("R15")
				playerType = "R15"
			}
		}
		wearing.push(parseInt(assetId))
		loadWearing()
		calculateCost(assetId)
	}
}

function addItemBulk(assetIds) {
	for (i = 0; i < assetIds.length; i++) {
		assetId = assetIds[i]
		wearing.push(parseInt(assetId))
		calculateCost(assetId)
	}
	loadWearing()
}

function removeItem(assetId) {
	index = wearing.indexOf(parseInt(assetId))
	if (index != -1) {
		$('.'+assetId).find('.checkmark-image').attr('src','https://ropro.io/images/checkmark_end.png')
		$('.'+assetId).find('.checkmark-image').removeClass('active')
		wearing.splice(index, 1)
		delete wearingCostDict[assetId]
		calculateCost(-1)
		loadWearing()
	}
}

function removeItemBulk(assetIds) {
	for (i = 0; i < assetIds.length; i++) {
		assetId = assetIds[i]
		index = wearing.indexOf(parseInt(assetId))
		if (index != -1) {
			wearing.splice(index, 1)
			delete wearingCostDict[assetId]
			calculateCost(-1)
		}
	}
	loadWearing()
}

function clearItems() {
	wearing = []
	loadWearing()
}

async function sandboxMain() {
	sandbox = document.createElement("div")
	sandbox.innerHTML += sandboxHTML
	sandbox.setAttribute("id", "sandbox")
	sandbox.setAttribute("class", "tab-pane resellers-container")
	sandbox.setAttribute("style", "width:1000px;margin:auto;")
	document.getElementsByClassName('content')[0].appendChild(sandbox)
	$(sandbox).find('.background-selector').click(function() {
		$('.background-checkmark-image').attr('src', 'https://ropro.io/images/empty.png')
		$(this).find('.background-checkmark-image').attr('src', 'https://ropro.io/images/checkmark.png')
		function changeImage(checkmark) {
			setTimeout(function(){
				$(checkmark).find('.background-checkmark-image').attr('src', 'https://ropro.io/images/checkmark_done.gif')
			}, 400)
		}
		changeImage(this)
		background = this.id
		loadWearing()
	})
	tab1 = createTab("Limiteds")
	document.getElementById("Limiteds").appendChild(tab1)
	tabs["Limiteds"] = tab1
	currentPage = tab1
	tab1.getElementsByClassName('input-dropdown-btn')[0].addEventListener('click', function(){
		dropdown = tab1.getElementsByClassName('dropdown-custom')[0]
		dropdown.classList.toggle("active")
	})
	$('.sandbox-search').on('keypress',function(e) {
		if(e.which == 13) {
			updatePage("", this.value, false)
		}
	})
	$('.sandbox-search-button').click(function() {
		updatePage("", this.parentNode.parentNode.getElementsByClassName('sandbox-search')[0].value, false)
	})
	$('.dropdown-custom-item').click(function(){
		sortSelected = this.getElementsByTagName('a')[0].innerHTML
		this.parentNode.parentNode.getElementsByClassName('rbx-selection-label')[0].innerHTML = stripTags(sortSelected)
		this.parentNode.classList.toggle("active")
		currentSort = sortSelected
		updatePage("", "", false)
		
	})
	sandboxOutfitsEnabled = await fetchSetting("sandboxOutfits")
	$('#createOutfitButton').click(function(){
		if (sandboxOutfitsEnabled) {
			if (this.innerHTML == "Save") {
				document.getElementById('outfitNameGroup').style.display = "block"
				this.innerHTML = "Close"
				document.getElementById('outfitSubtitle').style.display = "none"
			} else {
				document.getElementById('outfitNameGroup').style.display = "none"
				this.innerHTML = "Save"
				document.getElementById('outfitSubtitle').style.display = "block"
			}
		} else {
			upgradeModal()
		}
	})
	$('#outfitNameInput').on('keypress', function(e) {
		if (e.which == 13) {
			createOutfit(this.value)
		}
	})
	$('.catalog-tab').click(function() {
		$('.catalog-tab').removeClass('active')
		$(this).toggleClass('active')
		tabName = stripTags(this.innerHTML.split("<span")[0])
		if (tabName in tabs) {
			tabs[tabName].style.display = "block"
			for (i = 0; i < Object.keys(tabs).length; i++) {
				tabCheck = Object.keys(tabs)[i]
				if (tabCheck != tabName) {
					tabs[tabCheck].style.display = "none"
				}
			}
			currentPage = document.getElementById(tabName)
			activeTab = tabName
			currentTab = tabName
			currentSort = Object.keys(sorts[tabName])[0]
		} else {
			tab = createTab(tabName)
			tabDiv = document.getElementById(tabName)
			tabDiv.appendChild(tab)
			tab.style.display = "block"
			tabs[tabName] = tab
			currentPage = tab
			for (i = 0; i < Object.keys(tabs).length; i++) {
				tabCheck = Object.keys(tabs)[i]
				if (tabCheck != tabName) {
					tabs[tabCheck].style.display = "none"
				}
			}
			tab.getElementsByClassName('input-dropdown-btn')[0].addEventListener('click', function(){
				dropdown = this.parentNode.getElementsByClassName('dropdown-custom')[0]
				dropdown.classList.toggle("active")
			})
			$(tabDiv).find('.sandbox-search').on('keypress',function(e) {
				if(e.which == 13) {
					updatePage("", this.value, false)
				}
			})
			$(tabDiv).find('.sandbox-search-button').click(function() {
				updatePage("", this.parentNode.parentNode.getElementsByClassName('sandbox-search')[0].value, false)
			})
			$(tabDiv).find('.dropdown-custom-item').click(function(){
				sortSelected = this.getElementsByTagName('a')[0].innerHTML
				this.parentNode.parentNode.getElementsByClassName('rbx-selection-label')[0].innerHTML = stripTags(sortSelected)
				this.parentNode.classList.toggle("active")
				currentSort = sortSelected
				updatePage("", "", false)
			})
			activeTab = tabName
			currentTab = tabName
			currentSort = Object.keys(sorts[tabName])[0]
			updatePage("", "", false)
		}
	})
	updatePage("", "", false)
	document.getElementById("fullscreenToggle").addEventListener("click", function() {
		sandboxFrame = document.getElementById('sandboxFrame')
		state = sandboxFrame.getAttribute('class')
		if (state == "sandbox-frame") {
			sandboxFrame.setAttribute('class', 'sandbox-frame-full')
			document.getElementById('fullscreenImage').src = "https://ropro.io/images/fullscreen_1.png"
		} else {
			sandboxFrame.setAttribute('class', 'sandbox-frame')
			document.getElementById('fullscreenImage').src = "https://ropro.io/images/fullscreen_0.png"
		}
	})
	if (await fetchSetting("sandboxOutfits")) {
		document.getElementById("upgradeCTA").childNodes[1].innerHTML = chrome.i18n.getMessage("PleaseConsiderLeavingUsAReview")
		document.getElementById("upgradeCTA").childNodes[3].innerHTML = chrome.i18n.getMessage("Review")
		document.getElementById("upgradeCTA").childNodes[3].href = "https://ropro.io/install"
	} else {
		$('.upgradeText').text(chrome.i18n.getMessage("UpgradeToSaveYourOutfits"));
		$('.upgradeButtonText').text(chrome.i18n.getMessage("Upgrade"));
	}
	$('.currentlyWearingText').text(chrome.i18n.getMessage("CurrentlyWearing"));
	$('.clickAnItemText').text(chrome.i18n.getMessage("ClickAnItemToUnequipIt"));
	$('.backgroundText').text(chrome.i18n.getMessage("Background"));
	$('.chooseBackgroundText').text(chrome.i18n.getMessage("ChooseABackgroundBelow"));
	$('.myOutfitsText').text(chrome.i18n.getMessage("MyOutfits"));
	$('.pressEnterKeyText').text(chrome.i18n.getMessage("PressTheEnterKeyToSubmitOutfitName"));
	$('.nameAndSaveText').text(chrome.i18n.getMessage("NameAndSaveYourOutfit"));
	$('.outfitCostText').text(chrome.i18n.getMessage("OutfitCost"));
	merch = await fetchMerch()
	merchJSON = {
		"items": [
		]
	}
	for (k = 0; k < merch.length; k++) {
		merchJSON.items.push(		  {
			"itemType": "Asset",
			"id": merch[k]
		  })
	}
	itemDetails = await fetchDetails(merchJSON)
	for (k = 0; k < itemDetails.data.length; k++) {
		addMerch(itemDetails.data[k].id, itemDetails.data[k].name, itemDetails.data[k].price)
	}
	document.getElementById('scrollLeft').addEventListener('click', function() {
		if (merchPage > 0) {
			merchPage--
			$('.ropro-merch').css("display", "none")
			for (k = merchPage * merchStep; k < Math.min(merchPage * merchStep + merchStep, merchCount); k++) {
				document.getElementsByClassName('ropro-merch')[k].style.display = "inline-block"
			}
		}
		if (merchPage == 0) {
			this.classList.add('disabled')
		} else {
			this.classList.remove('disabled')
		}
		if (merchPage >= Math.floor(merchCount / merchStep)) {
			document.getElementById('scrollRight').classList.add('disabled')
		} else {
			document.getElementById('scrollRight').classList.remove('disabled')
		}
	})
	document.getElementById('scrollRight').addEventListener('click', function() {
		if (merchPage < Math.floor(merchCount / merchStep)) {
			merchPage++
			$('.ropro-merch').css("display", "none")
			for (k = merchPage * merchStep; k < Math.min(merchPage * merchStep + merchStep, merchCount); k++) {
				document.getElementsByClassName('ropro-merch')[k].style.display = "inline-block"
			}
		}
		if (merchPage >= Math.floor(merchCount / merchStep)) {
			this.classList.add('disabled')
		} else {
			this.classList.remove('disabled')
		}
		if (merchPage == 0) {
			document.getElementById('scrollLeft').classList.add('disabled')
		} else {
			document.getElementById('scrollLeft').classList.remove('disabled')
		}
	})
}

function doMain() {
	setTimeout(async function() {
		try{
			document.getElementsByClassName('content')[0].setAttribute('style','height:2000px;')
			await sandboxMain()
			loadCurrentlyWearing()
			document.title = 'RoPro Avatar Sandbox'
		}catch{
			doMain()
		}
	}, 500)
}

doMain()