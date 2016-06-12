'use strict';

$.featherlightGallery.prototype.afterContent = function() {
	var caption = this.$currentTarget.find('img').attr('alt');
	this.$instance.find('.modal-caption').remove();
	$('<div class="modal-caption">').text(caption).appendTo(this.$instance.find('.featherlight-content'));
};

$.featherlight.prototype.iframeMaxWidth = '100%';
$.featherlight.prototype.iframeWidth = 700;
$.featherlight.prototype.iframeHeight = 500;
