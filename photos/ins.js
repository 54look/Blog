/******/
(function(modules) { // webpackBootstrap
    /******/ // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/
        if (installedModules[moduleId])
            /******/
            return installedModules[moduleId].exports;
        /******/
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/
            exports: {},
            /******/
            id: moduleId,
            /******/
            loaded: false
            /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/
        module.loaded = true;
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ // __webpack_public_path__
    /******/
    __webpack_require__.p = "/dist/";
    /******/
    /******/ // Load entry module and return exports
    /******/
    return __webpack_require__(0);
    /******/
})
/************************************************************************/
/******/
([
    /* 0 */
    /***/
    function(module, exports, __webpack_require__) {

        'use strict';

        __webpack_require__(1);

        var _view = __webpack_require__(2);

        var _view2 = _interopRequireDefault(_view);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        /**
         * @name impush-client 
         * @description 这个项目让我发家致富…
         * @date 2016-12-1
         */

        var _collection = [];
        var _count = 0;
        var searchData;

        function addMask(elem) {
            var rect = elem.getBoundingClientRect();
            var style = getComputedStyle(elem, null);

            var mask = document.createElement('i');
            mask.className = 'icon-film';
            mask.style.color = '#fff';
            mask.style.fontSize = '26px';
            mask.style.position = 'absolute';
            mask.style.right = '10px';
            mask.style.bottom = '10px';
            mask.style.zIndex = 1;
            elem.parentNode.appendChild(mask);
        }

        var createVideoIncon = function createVideoIncon() {
            var $videoImg = document.querySelectorAll('.thumb a[data-type="video"]');
            for (var i = 0, len = $videoImg.length; i < len; i++) {
                addMask($videoImg[i]);
            }
        };
        var render = function render(res) {
            var ulTmpl = "";
            var liTmpl = "";

            /////////////   大漫先锋    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            ////////////////  2019-7  ////////////////////////////\
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1728-2304-加洛特.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1728-2304-加洛特.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">加洛特</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1728-2444-德雷克.jpg" data-size="1730x2440">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1728-2444-德雷克.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">德雷克</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/2304-1728-武士河松.jpg" data-size="4600x3450">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/2304-1728-武士河松.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">武士河松</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1728-2304-火拳路飞.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1728-2304-火拳路飞.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">火拳路飞</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1728-2304-索隆and酒壶.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1728-2304-索隆and酒壶.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">索隆and酒壶</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1728-2304-路飞1.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1728-2304-路飞1.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">路飞1</figcaption>\
            </figure>';
            ulTmpl = ulTmpl + '<section class="archives album bigbig1" style="display:block;"><h1 class="year">2019年<em>07月</em></h1>\
        <ul class="img-box-ul">' + liTmpl + '</ul>\
        </section>';
            ////////////////////  2019-7  ////////////////////////////////////

            ///////////////////  2018-9  /////////////////////////\
            liTmpl = "";
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/4608-3456-僵尸派对.jpg" data-size="4608x3252">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/4608-3456-僵尸派对.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">僵尸派对</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/4608-3252-草帽海贼团.jpg" data-size="4608x3252">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/4608-3252-草帽海贼团.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">草帽海贼团</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1707-1280-草帽骑士团.jpg" data-size="4608x3252">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1707-1280-草帽骑士团.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">草帽骑士团</figcaption>\
            </figure>';
            ulTmpl = ulTmpl + '<section class="archives album bigbig1" style="display:block;"><h1 class="year">2018年<em>09月</em></h1>\
        <ul class="img-box-ul">' + liTmpl + '</ul>\
        </section>';
            ///////////////////   2018-9   ////////////////////////////////////

            ////////////////////  2018-6   //////////////////////////////////\
            //////////////////////////////////////////////////////\
            liTmpl = "";
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/4608-3456-2档.jpg" data-size="4600x3450">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/4608-3456-2档.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">2档</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1350-1800-4档.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1350-1800-4档.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">4档</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/3456-4608-四档2.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/3456-4608-四档2.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">四档2</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/3200-2400-四档3.jpg" data-size="4600x3450">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/3200-2400-四档3.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">四档3</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1620-2160-四档4.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1620-2160-四档4.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">四档4</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/3951-3458-四档坦克人.jpg" data-size="1780x1580">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/3951-3458-四档坦克人.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">四档坦克人</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/4608-3456-四档大蛇人1.jpg" data-size="4600x3450">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/4608-3456-四档大蛇人1.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">四档大蛇人1</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/2448-3265-四档大蛇人2.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/2448-3265-四档大蛇人2.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">四档大蛇人2</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/2160-1620-四档5.jpg" data-size="4600x3450">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/2160-1620-四档5.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">四档5</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/3456-4608-四档大集合.jpg" data-size="4608x3456">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/3456-4608-四档大集合.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">四档全家福</figcaption>\
            </figure>';
            ulTmpl = ulTmpl + '<section class="archives album bigbig1" style="display:block;"><h1 class="year">大蛇人真的好帅！！！<em></em></h1>\
        <ul class="img-box-ul">' + liTmpl + '</ul>\
        </section>'; ////////////////////////////////////////////////////////////////
            ///////////////////  2018-6   /////////////////////////////////////

            ///////////////////   2017    ///////////////////////////////////
            liTmpl = "";
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1620-1620-奶牛妹1.jpg" data-size="1080x1080">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1620-1620-奶牛妹1.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">奶牛妹1</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/2160-1620-奶牛妹2.jpg" data-size="4608x3252">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/2160-1620-奶牛妹2.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">奶牛妹2</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/2160-1620-快跑鸭..jpg" data-size="4608x3252">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/2160-1620-快跑鸭..jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">快跑鸭.</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/2160-1620-沙漠速派龟.jpg" data-size="4608x3252">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/2160-1620-沙漠速派龟.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">沙漠速派龟</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/3456-4608-王者路飞.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/3456-4608-王者路飞.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">王者路飞</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/2160-1620-罗1.jpg" data-size="4608x3252">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/2160-1620-罗1.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">罗1</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/2160-1620-骑着甲虫的路飞.jpg" data-size="4608x3252">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/2160-1620-骑着甲虫的路飞.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">骑着甲虫的路飞</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/2160-1620-龙.jpg" data-size="4608x3252">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/2160-1620-龙.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">龙</figcaption>\
            </figure>';
            ulTmpl = ulTmpl + '<section class="archives album bigbig1" style="display:block;"><h1 class="year">2017年<em></em></h1>\
        <ul class="img-box-ul">' + liTmpl + '</ul>\
        </section>';
            ///////////////////   2017   //////////////////////////////////

            ///////////////////// 2016-8   /////////////////////////////////\
            liTmpl = "";
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1350-1800-Big Man海贼船.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1350-1800-Big Man海贼船.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">Big Man海贼船</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/960-720-七龙珠.jpg" data-size="4608x3252">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/960-720-七龙珠.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">七龙珠</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/4608-3456-恐怖三角帆船1.jpg" data-size="4608x3252">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/4608-3456-恐怖三角帆船1.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">恐怖三角帆船1</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/2160-1620-恐怖三角帆船2.jpg" data-size="4608x3252">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/2160-1620-恐怖三角帆船2.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">恐怖三角帆船2</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/960-720-格林比特1.jpg" data-size="4608x3252">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/960-720-格林比特1.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">格林比特1</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/2400-3200-格林比特2.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/2400-3200-格林比特2.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">格林比特2</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/2160-1620-海格里斯.jpg" data-size="4608x3252">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/2160-1620-海格里斯.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">海格里斯</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/718-960-罗2.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/718-960-罗2.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">罗2</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1620-2160-骑白马的卡文迪许.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1620-2160-骑白马的卡文迪许.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">骑白马的卡文迪许</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/3200-2400-骗人布将军和乔巴侍卫.jpg" data-size="4608x3252">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/3200-2400-骗人布将军和乔巴侍卫.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">骗人布将军和乔巴侍卫</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/2160-1620-龙宫城1.jpg" data-size="4608x3252">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/2160-1620-龙宫城1.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">龙宫城1</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/2160-1620-龙宫城2.jpg" data-size="4608x3252">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/2160-1620-龙宫城2.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">龙宫城2</figcaption>\
            </figure>';
            ulTmpl = ulTmpl + '<section class="archives album bigbig1" style="display:block;"><h1 class="year">2016年<em>04月</em></h1>\
        <ul class="img-box-ul">' + liTmpl + '</ul>\
        </section>';
            ////////////////////// 2016-8   //////////////////////////////////////////

            //////////////////////  2016-7  ////////////////////////////////\
            liTmpl = "";
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/720-960-小黄人1.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/720-960-小黄人1.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">小黄人1</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/2400-3200-Q版四档.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/2400-3200-Q版四档.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">Q版四档</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/720-960-路飞2.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/720-960-路飞2.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">路飞2</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1350-1800-汉考克.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1350-1800-汉考克.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">汉考克</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1350-1800-草帽机械团轰炸小镇.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1350-1800-草帽机械团轰炸小镇.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">草帽机械团轰炸小镇</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1350-1800-山治王子和白雪罗宾.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1350-1800-山治王子和白雪罗宾.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">山治王子和白雪罗宾</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1350-1800-鱼人岛房屋.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1350-1800-鱼人岛房屋.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">鱼人岛房屋</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1350-1800-牧羊中的乔巴.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1350-1800-牧羊中的乔巴.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">牧羊中的乔巴</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1350-1800-播音中的路飞.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1350-1800-播音中的路飞.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">播音中的路飞</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1350-1511-沙漠中的路飞.jpg" data-size="1350x1510">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1350-1511-沙漠中的路飞.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">沙漠中的路飞</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1337-1486-牛仔乔巴.jpg" data-size="1350x1510">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1337-1486-牛仔乔巴.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">牛仔乔巴</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1350-1600-遛狗中的布鲁克.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1350-1600-遛狗中的布鲁克.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">遛狗中的布鲁克</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1345-1490-骗人布滑翔机.jpg" data-size="1350x1510">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1345-1490-骗人布滑翔机.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">骗人布滑翔机</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1350-1492-索隆正在捉偷酒的狮子.jpg" data-size="1350x1490">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1350-1492-索隆正在捉偷酒的狮子.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">索隆正在捉偷酒的狮子</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1350-1598-佛朗奇.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1350-1598-佛朗奇.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">佛朗奇用自制的铁马和马儿赛跑</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1350-1514-骗人布正在给长颈鹿上色.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1350-1514-骗人布正在给长颈鹿上色.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">骗人布正在给没有色斑的长颈鹿上色</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1800-1350-悬赏单1.jpg" data-size="4600x3450">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1800-1350-悬赏单1.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">悬赏单(2年前)</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1800-1350-悬赏单2.jpg" data-size="4600x3450">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1800-1350-悬赏单2.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">悬赏单(2年后)</figcaption>\
            </figure>';
            ulTmpl = ulTmpl + '<section class="archives album bigbig1" style="display:block;"><h1 class="year">2016年<em>07月</em></h1>\
        <ul class="img-box-ul">' + liTmpl + '</ul>\
        </section>';
            ////////////////////  2016-7  ////////////////////////////////////////////

            ////////////////////// 2016-6  /////////////////////////////////\
            liTmpl = "";
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/2400-3200-伊迪欧.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/2400-3200-伊迪欧.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">伊迪欧</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/2400-3200-欧隆布斯.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/2400-3200-欧隆布斯.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">欧隆布斯</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/720-960-毕卡.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/720-960-毕卡.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">毕卡</figcaption>\
            </figure>';
            ulTmpl = ulTmpl + '<section class="archives album bigbig1" style="display:block;"><h1 class="year">2016年<em>06月</em></h1>\
        <ul class="img-box-ul">' + liTmpl + '</ul>\
        </section>';
            ////////////////////  2016-6  /////////////////////////////////////////////

            //////////////////////////////////////////////////////\
            liTmpl = "";
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/2400-3200-2013.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/2400-3200-2013.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">于2015年画</figcaption>\
            </figure>';
            ulTmpl = ulTmpl + '<section class="archives album bigbig1" style="display:block;"><h1 class="year">2015年<em>11月</em></h1>\
        <ul class="img-box-ul">' + liTmpl + '</ul>\
        </section>';
            liTmpl = "";
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/2400-3200-2014.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/2400-3200-2014.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">于2014年画</figcaption>\
            </figure>';
            ulTmpl = ulTmpl + '<section class="archives album bigbig1" style="display:block;"><h1 class="year">2014年<em>06月</em></h1>\
        <ul class="img-box-ul">' + liTmpl + '</ul>\
        </section>';
            liTmpl = "";
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/2448-3264-2015.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/2448-3264-2015.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">于2013画</figcaption>\
            </figure>';
            ulTmpl = ulTmpl + '<section class="archives album bigbig1" style="display:block;"><h1 class="year">2013年<em>05月</em></h1>\
        <ul class="img-box-ul">' + liTmpl + '</ul>\
        </section>';
            /////////////  大漫先锋   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



            /////////////  彩绘   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            /////////////////////////////////////////////////////////////////
            liTmpl = "";
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1536-2048-雪糕1.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1536-2048-雪糕1.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">雪糕1</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1536-2048-雪糕2.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1536-2048-雪糕2.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">雪糕2</figcaption>\
            </figure>';
            ulTmpl = ulTmpl + '<section class="archives album bigbig2" style="display:none;"><h1 class="year">哈哈第一张马克笔画<em></em></h1>\
        <ul class="img-box-ul">' + liTmpl + '</ul>\
        </section>';

            /////////////////////////////////////////////////////////////////
            liTmpl = "";
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1728-2061-彩绘21.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1728-2061-彩绘21.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">彩绘21</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1728-2304-彩绘22.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1728-2304-彩绘22.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">彩绘22</figcaption>\
            </figure>';
            ulTmpl = ulTmpl + '<section class="archives album bigbig2" style="display:none;"><h1 class="year">哈哈第二张马克笔画<em></em></h1>\
        <ul class="img-box-ul">' + liTmpl + '</ul>\
        </section>';

            /////////////////////////////////////////////////////////////////
            liTmpl = "";
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/3456-4608-彩绘1.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/3456-4608-彩绘1.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">彩绘1</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1728-2304-彩绘2.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1728-2304-1彩绘2.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">彩绘2</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1728-2304-彩绘3.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1728-2304-彩绘3.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">彩绘3</figcaption>\
            </figure>';
            ulTmpl = ulTmpl + '<section class="archives album bigbig2" style="display:none;"><h1 class="year">第三张马克笔画<em></em></h1>\
        <ul class="img-box-ul">' + liTmpl + '</ul>\
        </section>';

            //////////////////////////////////////////////////////
            liTmpl = "";
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1728-2304-北极熊载着南极企鹅.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1728-2304-北极熊载着南极企鹅.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">北极熊载着南极企鹅</figcaption>\
            </figure>';
            ulTmpl = ulTmpl + '<section class="archives album bigbig2" style="display:none;"><h1 class="year">北极熊载着南极企鹅<em></em></h1>\
        <ul class="img-box-ul">' + liTmpl + '</ul>\
        </section>';

            /////////////////////////////////////////////////////////////////
            liTmpl = "";
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/2212-1658-兔女郎1.jpg" data-size="4608x3252">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/2212-1658-兔女郎1.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">兔女郎1</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/2304-1728-兔女郎2.jpg" data-size="4608x3252">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/2304-1728-兔女郎2.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">兔女郎2</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/2304-1728-兔女郎3.jpg" data-size="4608x3252">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/2304-1728-兔女郎3.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">兔女郎3</figcaption>\
            </figure>';
            ulTmpl = ulTmpl + '<section class="archives album bigbig2" style="display:none;"><h1 class="year">兔女郎<em></em></h1>\
        <ul class="img-box-ul">' + liTmpl + '</ul>\
        </section>';

            /////////////////////////////////////////////////////////////////
            liTmpl = "";
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1728-2304-杂货铺1.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1728-2304-杂货铺1.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">解忧杂货铺</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1728-2304-杂货铺2.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1728-2304-杂货铺2.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">解忧杂货铺</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1728-2304-杂货铺3.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1728-2304-杂货铺3.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">解忧杂货铺</figcaption>\
            </figure>';
            ulTmpl = ulTmpl + '<section class="archives album bigbig2" style="display:none;"><h1 class="year">解忧杂货铺<em></em></h1>\
        <ul class="img-box-ul">' + liTmpl + '</ul>\
        </section>';

            /////////////////////////////////////////////////////////////////
            liTmpl = "";
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/3456-4608-金木研.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/3456-4608-金木研.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">金木研铅笔画线稿</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1728-2304-金木研2.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1728-2304-金木研2.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">金木研针管笔线稿</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1728-2304-金木研3.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1728-2304-金木研3.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">金木研马克笔上色</figcaption>\
            </figure>';
            ulTmpl = ulTmpl + '<section class="archives album bigbig2" style="display:none;"><h1 class="year">超级喜欢金木研梳大背头的样子<em></em></h1>\
        <ul class="img-box-ul">' + liTmpl + '</ul>\
        </section>';

            /////////////    彩绘    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




            /////////////    随笔    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            //////////////////////////////////////////////////////\
            liTmpl = "";
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/2160-1620-4档2.jpg" data-size="4608x3252">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/2160-1620-4档2.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">4档2</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/4608-3456-4档3.jpg" data-size="4608x3252">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/4608-3456-4档3.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">4档3</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/3458-4609-4皇.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/3458-4609-4皇.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">4皇</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/720-960-乔巴.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/720-960-乔巴.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">乔巴</figcaption>\
            </figure>';
            ulTmpl = ulTmpl + '<section class="archives album bigbig3" style="display:none;"><h1 class="year">2020年<em>01月</em></h1>\
        <ul class="img-box-ul">' + liTmpl + '</ul>\
        </section>';
            /////////////////////////////////////////////////////////////////
            liTmpl = "";
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1728-2304-人物1.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1728-2304-人物1.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">人物1</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1728-2304-人物2.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1728-2304-人物2.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">人物2</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1728-1740-人物3.jpg" data-size="1350x1490">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1728-1740-人物3.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">人物3</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/3458-4608-人物4.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/3458-4608-人物4.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">人物4</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/3456-4608-公主.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/3456-4608-公主.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">公主</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/2304-1728-呃呃呃.jpg" data-size="4608x3252">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/2304-1728-呃呃呃.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">呃呃呃</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/2304-1728-小圆子.jpg" data-size="4608x3252">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/2304-1728-小圆子.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">小圆子</figcaption>\
            </figure>';
            ulTmpl = ulTmpl + '<section class="archives album bigbig3" style="display:none;"><h1 class="year">2020年<em>01月</em></h1>\
        <ul class="img-box-ul">' + liTmpl + '</ul>\
        </section>';
            /////////////////////////////////////////////////////////////////
            liTmpl = "";
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/720-960-我的球鞋.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/720-960-我的球鞋.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">我的球鞋</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/2448-3264-树.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/2448-3264-树.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">树</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/3456-4608-生日快乐.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/3456-4608-生日快乐.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">生日快乐</figcaption>\
            </figure>';
            ulTmpl = ulTmpl + '<section class="archives album bigbig3" style="display:none;"><h1 class="year">2020年<em>01月</em></h1>\
        <ul class="img-box-ul">' + liTmpl + '</ul>\
        </section>';
            /////////////////////////////////////////////////////////////////
            liTmpl = "";
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1728-2304-路飞3.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1728-2304-路飞3.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">路飞3</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1728-2304-路飞4.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1728-2304-路飞4.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">路飞4</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/2448-3264-路飞5.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/2448-3264-路飞5.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">路飞5</figcaption>\
            </figure>';
            ulTmpl = ulTmpl + '<section class="archives album bigbig3" style="display:none;"><h1 class="year">2020年<em>01月</em></h1>\
        <ul class="img-box-ul">' + liTmpl + '</ul>\
        </section>';
            /////////////////////////////////////////////////////////////////
            liTmpl = "";
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/3456-4608-金木研4.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/3456-4608-金木研4.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">金木研4</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/3456-4608-金木研5.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/3456-4608-金木研5.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">金木研5</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1620-2160-金木研6.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1620-2160-金木研6.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">金木研6</figcaption>\
            </figure>';
            ulTmpl = ulTmpl + '<section class="archives album bigbig3" style="display:none;"><h1 class="year">2020年<em>01月</em></h1>\
        <ul class="img-box-ul">' + liTmpl + '</ul>\
        </section>';
            /////////////////////////////////////////////////////////////////
            liTmpl = "";
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/2592-4608-随笔.jpg" data-size="2590x4600">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/2592-4608-随笔.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">随笔</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/3458-4609-随笔2.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/3458-4609-随笔2.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">随笔2</figcaption>\
            </figure>';
            ulTmpl = ulTmpl + '<section class="archives album bigbig3" style="display:none;"><h1 class="year">2020年<em>01月</em></h1>\
        <ul class="img-box-ul">' + liTmpl + '</ul>\
        </section>';
            /////////////////////////////////////////////////////////////////
            liTmpl = "";
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/3456-4608-随笔3.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/3456-4608-随笔3.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">第一次用粉笔来画路飞,不是很习惯，只能是画成这个效果了</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/3456-4608-随笔4.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/3456-4608-随笔4.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">随笔4</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/4608-3456-随笔5.jpg" data-size="4608x3252">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/4608-3456-随笔5.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">随笔5</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1280-720-随笔6.jpg" data-size="1280x720">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1280-720-1随笔6.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">有人帮我拍的，过了好久我才知道</figcaption>\
            </figure>';
            ulTmpl = ulTmpl + '<section class="archives album bigbig3" style="display:none;"><h1 class="year">2019年<em>07月</em></h1>\
        <ul class="img-box-ul">' + liTmpl + '</ul>\
        </section>';
            ////////////////////////////////////////////////////////////////

            /////////////   随笔      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




            /////////////   小漫      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            //////////////////////////////////////////////////////\
            liTmpl = "";
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1620-2160-小漫1.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1620-2160-小漫1.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">小漫1</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1620-2160-小漫2.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1620-2160-小漫2.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">小漫2</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1620-2160-小漫3.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1620-2160-小漫3.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">小漫3</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1620-2160-小漫4.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1620-2160-小漫4.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">小漫4</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1620-2160-小漫5.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1620-2160-小漫5.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">小漫5</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1620-2160-小漫6.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1620-2160-小漫6.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">小漫6</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1620-2160-小漫7.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1620-2160-小漫7.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">小漫7</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1620-2160-小漫8.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1620-2160-小漫8.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">小漫8</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1620-2160-小漫9.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1620-2160-小漫9.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">小漫9</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1620-2160-小漫10.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1620-2160-小漫10.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">小漫10</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1620-2160-小漫11.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1620-2160-小漫11.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">小漫11</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1620-2160-小漫12.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1620-2160-小漫12.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">小漫12</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1585-1984-小漫13.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1585-1984-小漫13.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">小漫13</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1620-2160-小漫14.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1620-2160-小漫14.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">小漫14</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1586-1975-小漫15.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1586-1975-小漫15.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">小漫15</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1620-2160-小漫16.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1620-2160-小漫16.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">小漫16</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/2160-1620-小漫17.jpg" data-size="4608x3252">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/2160-1620-小漫17.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">小漫17</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1784-1585-小漫18.jpg" data-size="1780x1580">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1784-1585-小漫18.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">小漫18</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1620-2160-小漫19.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1620-2160-小漫19.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">小漫19</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1620-2160-小漫20.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1620-2160-小漫20.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">小漫20</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/2028-1602-小漫21.jpg" data-size="2020x1600">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/2028-1602-小漫21.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">小漫21</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1506-2160-小漫22.jpg" data-size="2590x4600">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1506-2160-小漫22.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">小漫22</figcaption>\
            </figure>';
            ulTmpl = ulTmpl + '<section class="archives album bigbig4" style="display:none;"><h1 class="year">大猿王大战天夜叉<em></em></h1>\
        <ul class="img-box-ul">' + liTmpl + '</ul>\
        </section>';
            /////////////////////////////////////////////////////////////////
            liTmpl = "";
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1911-1559-小漫27.jpg" data-size="1780x1580">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1911-1559-小漫27.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">小漫27</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1620-2160-小漫28.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1620-2160-小漫28.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">小漫28</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1620-2160-小漫29.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1620-2160-小漫29.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">小漫29</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1620-2160-小漫30.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1620-2160-小漫30.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">小漫30</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1080-1440-小漫31.jpg" data-size="1720x2300">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1080-1440-小漫31.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">小漫31</figcaption>\
            </figure>';
            liTmpl += '<figure class="thumb">\
                <a href="http://q4ecplq6d.bkt.clouddn.com/1952-1417-小漫32.jpg" data-size="4608x3252">\
                  <img class="reward-img" src="http://q4cz9u1cx.bkt.clouddn.com/1952-1417-小漫32.jpg" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none">小漫32</figcaption>\
            </figure>';
            ulTmpl = ulTmpl + '<section class="archives album bigbig4" style="display:none;"><h1 class="year">不知道叫什么标题的标题<em></em></h1>\
        <ul class="img-box-ul">' + liTmpl + '</ul>\
        </section>';
            /////////////   小漫      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            document.querySelector('.instagram').innerHTML = '<div class="photos" itemscope="" itemtype="http://schema.org/ImageGallery">' + ulTmpl + '</div>';
            createVideoIncon();
            _view2.default.init();
        };

        var replacer = function replacer(str) {
            var arr = str.split("/");
            return "/assets/ins/" + arr[arr.length - 1];
        };

        var ctrler = function ctrler(data) {
            var imgObj = {};
            for (var i = 0, len = data.length; i < len; i++) {
                var y = data[i].y;
                var m = data[i].m;
                var src = replacer(data[i].src);
                var text = data[i].text;
                var key = y + "" + ((m + "").length == 1 ? "0" + m : m);
                if (imgObj[key]) {
                    imgObj[key].srclist.push(src);
                    imgObj[key].text.push(text);
                } else {
                    imgObj[key] = {
                        year: y,
                        month: m,
                        srclist: [src],
                        text: [text]
                    };
                }
            }
            render(imgObj);
        };

        function loadData(success) {
            if (!searchData) {
                var xhr = new XMLHttpRequest();
                xhr.open('GET', './ins.json?t=' + +new Date(), true);

                xhr.onload = function() {
                    if (this.status >= 200 && this.status < 300) {
                        var res = JSON.parse(this.response);
                        searchData = res;
                        success(searchData);
                    } else {
                        console.error(this.statusText);
                    }
                };

                xhr.onerror = function() {
                    console.error(this.statusText);
                };

                xhr.send();
            } else {
                success(searchData);
            }
        }

        var Ins = {
            init: function init() {
                loadData(function(data) {
                    render(data);
                });
            }
        };

        Ins.init();

        // export default impush;

        /***/
    },
    /* 1 */
    /***/
    function(module, exports, __webpack_require__) {

        /* WEBPACK VAR INJECTION */
        (function(global) {
            'use strict';

            var inViewport = __webpack_require__(3);
            var lazyAttrs = ['data-src'];

            global.lzld = lazyload();

            // Provide libs using getAttribute early to get the good src
            // and not the fake data-src
            replaceGetAttribute('Image');
            replaceGetAttribute('IFrame');

            function registerLazyAttr(attr) {
                if (indexOf.call(lazyAttrs, attr) === -1) {
                    lazyAttrs.push(attr);
                }
            }

            function lazyload(opts) {
                opts = merge({
                    'offset': 333,
                    'src': 'data-src',
                    'container': false
                }, opts || {});

                if (typeof opts.src === 'string') {
                    registerLazyAttr(opts.src);
                }

                var elts = [];

                function show(elt) {
                    var src = findRealSrc(elt);

                    if (src) {
                        elt.src = src;
                    }

                    elt.setAttribute('data-lzled', true);
                    elts[indexOf.call(elts, elt)] = null;
                }

                function findRealSrc(elt) {
                    if (typeof opts.src === 'function') {
                        return opts.src(elt);
                    }

                    return elt.getAttribute(opts.src);
                }

                function register(elt) {
                    elt.onload = null;
                    elt.removeAttribute('onload');
                    elt.onerror = null;
                    elt.removeAttribute('onerror');

                    if (indexOf.call(elts, elt) === -1) {
                        inViewport(elt, opts, show);
                    }
                }

                return register;
            }

            function replaceGetAttribute(elementName) {
                var fullname = 'HTML' + elementName + 'Element';
                if (fullname in global === false) {
                    return;
                }

                var original = global[fullname].prototype.getAttribute;
                global[fullname].prototype.getAttribute = function(name) {
                    if (name === 'src') {
                        var realSrc;
                        for (var i = 0, max = lazyAttrs.length; i < max; i++) {
                            realSrc = original.call(this, lazyAttrs[i]);
                            if (realSrc) {
                                break;
                            }
                        }

                        return realSrc || original.call(this, name);
                    }

                    // our own lazyloader will go through theses lines
                    // because we use getAttribute(opts.src)
                    return original.call(this, name);
                };
            }

            function merge(defaults, opts) {
                for (var name in defaults) {
                    if (opts[name] === undefined) {
                        opts[name] = defaults[name];
                    }
                }

                return opts;
            }

            // http://webreflection.blogspot.fr/2011/06/partial-polyfills.html
            function indexOf(value) {
                for (var i = this.length; i-- && this[i] !== value;) {}
                return i;
            }

            module.exports = lazyload;

            // export default impush;
            /* WEBPACK VAR INJECTION */
        }.call(exports, (function() {
            return this;
        }())))

        /***/
    },
    /* 2 */
    /***/
    function(module, exports) {

        'use strict';

        var initPhotoSwipeFromDOM = function initPhotoSwipeFromDOM(gallerySelector) {

            // parse slide data (url, title, size ...) from DOM elements 
            // (children of gallerySelector)
            var parseThumbnailElements = function parseThumbnailElements(el) {
                el = el.parentNode.parentNode;
                var thumbElements = el.getElementsByClassName('thumb'),
                    numNodes = thumbElements.length,
                    items = [],
                    figureEl,
                    linkEl,
                    size,
                    type,
                    // video or not
                    target,
                    item;

                for (var i = 0; i < numNodes; i++) {

                    figureEl = thumbElements[i]; // 

                    // include only element nodes 
                    if (figureEl.nodeType !== 1) {
                        continue;
                    }

                    linkEl = figureEl.children[0]; // 

                    size = linkEl.getAttribute('data-size').split('x');
                    type = linkEl.getAttribute('data-type');
                    target = linkEl.getAttribute('data-target');
                    // create slide object
                    item = {
                        src: linkEl.getAttribute('href'),
                        w: parseInt(size[0], 10),
                        h: parseInt(size[1], 10)
                    };

                    if (figureEl.children.length > 1) {
                        item.title = figureEl.children[1].innerHTML;
                    }

                    if (linkEl.children.length > 0) {
                        item.msrc = linkEl.children[0].getAttribute('src');
                        item.type = type;
                        item.target = target;
                        item.html = '<video src="' + target + '" controls="controls" autoplay="autoplay"></video>';
                        if (type === 'video') {
                            //item.src = null;
                        }
                    }

                    item.el = figureEl; // save link to element for getThumbBoundsFn
                    items.push(item);
                }

                return items;
            };

            // find nearest parent element
            var closest = function closest(el, fn) {
                return el && (fn(el) ? el : closest(el.parentNode, fn));
            };

            // triggers when user clicks on thumbnail
            var onThumbnailsClick = function onThumbnailsClick(e) {
                e = e || window.event;
                e.preventDefault ? e.preventDefault() : e.returnValue = false;

                var eTarget = e.target || e.srcElement;

                // find root element of slide
                var clickedListItem = closest(eTarget, function(el) {
                    return el.tagName && el.tagName.toUpperCase() === 'FIGURE';
                });

                if (!clickedListItem) {
                    return;
                }

                // find index of clicked item by looping through all child nodes
                // alternatively, you may define index via data- attribute
                var clickedGallery = clickedListItem.parentNode,

                    // childNodes = clickedListItem.parentNode.childNodes,
                    // numChildNodes = childNodes.length,
                    childNodes = document.getElementsByClassName('thumb'),
                    numChildNodes = childNodes.length,
                    nodeIndex = 0,
                    index;

                for (var i = 0; i < numChildNodes; i++) {
                    if (childNodes[i].nodeType !== 1) {
                        continue;
                    }

                    if (childNodes[i] === clickedListItem) {
                        index = nodeIndex;
                        break;
                    }
                    nodeIndex++;
                }

                if (index >= 0) {
                    // open PhotoSwipe if valid index found
                    openPhotoSwipe(index, clickedGallery);
                }
                return false;
            };

            // parse picture index and gallery index from URL (#&pid=1&gid=2)
            var photoswipeParseHash = function photoswipeParseHash() {
                var hash = window.location.hash.substring(1),
                    params = {};

                if (hash.length < 5) {
                    return params;
                }

                var vars = hash.split('&');
                for (var i = 0; i < vars.length; i++) {
                    if (!vars[i]) {
                        continue;
                    }
                    var pair = vars[i].split('=');
                    if (pair.length < 2) {
                        continue;
                    }
                    params[pair[0]] = pair[1];
                }

                if (params.gid) {
                    params.gid = parseInt(params.gid, 10);
                }

                return params;
            };

            var openPhotoSwipe = function openPhotoSwipe(index, galleryElement, disableAnimation, fromURL) {
                var pswpElement = document.querySelectorAll('.pswp')[0],
                    gallery,
                    options,
                    items;

                items = parseThumbnailElements(galleryElement);
                // define options (if needed)
                options = {

                    // define gallery index (for URL)
                    galleryUID: galleryElement.getAttribute('data-pswp-uid'),

                    getThumbBoundsFn: function getThumbBoundsFn(index) {
                        // See Options -> getThumbBoundsFn section of documentation for more info
                        var thumbnail = items[index].el.getElementsByTagName('img')[0],
                            // find thumbnail
                            pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                            rect = thumbnail.getBoundingClientRect();

                        return {
                            x: rect.left,
                            y: rect.top + pageYScroll,
                            w: rect.width
                        };
                    }

                };

                // PhotoSwipe opened from URL
                if (fromURL) {
                    if (options.galleryPIDs) {
                        // parse real index when custom PIDs are used 
                        // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                        for (var j = 0; j < items.length; j++) {
                            if (items[j].pid == index) {
                                options.index = j;
                                break;
                            }
                        }
                    } else {
                        // in URL indexes start from 1
                        options.index = parseInt(index, 10) - 1;
                    }
                } else {
                    options.index = parseInt(index, 10);
                }

                // exit if index not found
                if (isNaN(options.index)) {
                    return;
                }

                if (disableAnimation) {
                    options.showAnimationDuration = 0;
                }

                // Pass data to PhotoSwipe and initialize it
                gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
                gallery.init();

                var $tempVideo;
                var stopVideoHandle = function stopVideoHandle() {
                    if ($tempVideo) {
                        $tempVideo.remove();
                        $tempVideo = null;
                    }
                };
                var changeHandle = function changeHandle() {
                    var item = gallery.currItem;
                    stopVideoHandle();
                    if (item.type === 'video') {
                        var $ctn = item.container;
                        var style = $ctn.getElementsByClassName('pswp__img')[0].style;
                        var $video = document.createElement('video');
                        $video.setAttribute('autoplay', 'autoplay');
                        $video.setAttribute('controls', 'controls');
                        $video.setAttribute('src', item.target);
                        $video.style.width = style.width;
                        $video.style.height = style.height;
                        $video.style.position = 'absolute';
                        $video.style.zIndex = 2;
                        $tempVideo = $video;
                        $ctn.appendChild($video);
                    }
                };
                gallery.listen('initialZoomIn', changeHandle);
                gallery.listen('afterChange', changeHandle);
                gallery.listen('initialZoomOut', stopVideoHandle);
            };

            // loop through all gallery elements and bind events
            var galleryElements = document.querySelectorAll(gallerySelector);
            for (var i = 0, l = galleryElements.length; i < l; i++) {
                galleryElements[i].setAttribute('data-pswp-uid', i + 1);
                galleryElements[i].onclick = onThumbnailsClick;
            }

            // Parse URL and open gallery if it contains #&pid=3&gid=1
            var hashData = photoswipeParseHash();
            if (hashData.pid && hashData.gid) {
                openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
            }
        };

        var Viewer = function() {
            function init() {
                initPhotoSwipeFromDOM('.photos');
            }
            return {
                init: init
            };
        }();

        module.exports = Viewer;

        /***/
    },
    /* 3 */
    /***/
    function(module, exports) {

        /* WEBPACK VAR INJECTION */
        (function(global) {
            module.exports = inViewport;

            var instances = [];
            var supportsMutationObserver = typeof global.MutationObserver === 'function';

            function inViewport(elt, params, cb) {
                var opts = {
                    container: global.document.body,
                    offset: 0
                };

                if (params === undefined || typeof params === 'function') {
                    cb = params;
                    params = {};
                }

                var container = opts.container = params.container || opts.container;
                var offset = opts.offset = params.offset || opts.offset;

                for (var i = 0; i < instances.length; i++) {
                    if (instances[i].container === container) {
                        return instances[i].isInViewport(elt, offset, cb);
                    }
                }

                return instances[
                    instances.push(createInViewport(container)) - 1
                ].isInViewport(elt, offset, cb);
            }

            function addEvent(el, type, fn) {
                if (el.attachEvent) {
                    el.attachEvent('on' + type, fn);
                } else {
                    el.addEventListener(type, fn, false);
                }
            }

            function debounce(func, wait, immediate) {
                var timeout;
                return function() {
                    var context = this,
                        args = arguments;
                    var callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if (callNow) func.apply(context, args);

                    function later() {
                        timeout = null;
                        if (!immediate) func.apply(context, args);
                    }
                };
            }

            // https://github.com/jquery/sizzle/blob/3136f48b90e3edc84cbaaa6f6f7734ef03775a07/sizzle.js#L708
            var contains = function() {
                if (!global.document) {
                    return true;
                }
                return global.document.documentElement.compareDocumentPosition ?
                    function(a, b) {
                        return !!(a.compareDocumentPosition(b) & 16);
                    } :
                    global.document.documentElement.contains ?
                    function(a, b) {
                        return a !== b && (a.contains ? a.contains(b) : false);
                    } :
                    function(a, b) {
                        while (b = b.parentNode) {
                            if (b === a) {
                                return true;
                            }
                        }
                        return false;
                    };
            }

            function createInViewport(container) {
                var watches = createWatches();

                var scrollContainer = container === global.document.body ? global : container;
                var debouncedCheck = debounce(watches.checkAll(watchInViewport), 15);

                addEvent(scrollContainer, 'scroll', debouncedCheck);

                if (scrollContainer === global) {
                    addEvent(global, 'resize', debouncedCheck);
                }

                if (supportsMutationObserver) {
                    observeDOM(watches, container, debouncedCheck);
                }

                // failsafe check, every 200ms we check for visible images
                // usecase: a hidden parent containing eleements
                // when the parent becomes visible, we have no event that the children
                // became visible
                setInterval(debouncedCheck, 150);

                function isInViewport(elt, offset, cb) {
                    if (!cb) {
                        return isVisible(elt, offset);
                    }

                    var remote = createRemote(elt, offset, cb);
                    remote.watch();
                    return remote;
                }

                function createRemote(elt, offset, cb) {
                    function watch() {
                        watches.add(elt, offset, cb);
                    }

                    function dispose() {
                        watches.remove(elt);
                    }

                    return {
                        watch: watch,
                        dispose: dispose
                    };
                }

                function watchInViewport(elt, offset, cb) {
                    if (isVisible(elt, offset)) {
                        watches.remove(elt);
                        cb(elt);
                    }
                }

                function isVisible(elt, offset) {
                    if (!contains(global.document.documentElement, elt) || !contains(global.document.documentElement, container)) {
                        return false;
                    }

                    // Check if the element is visible
                    // https://github.com/jquery/jquery/blob/740e190223d19a114d5373758127285d14d6b71e/src/css/hiddenVisibleSelectors.js
                    if (!elt.offsetWidth || !elt.offsetHeight) {
                        return false;
                    }

                    var eltRect = elt.getBoundingClientRect();
                    var viewport = {};

                    if (container === global.document.body) {
                        viewport = {
                            top: -offset,
                            left: -offset,
                            right: global.document.documentElement.clientWidth + offset,
                            bottom: global.document.documentElement.clientHeight + offset
                        };
                    } else {
                        var containerRect = container.getBoundingClientRect();
                        viewport = {
                            top: containerRect.top - offset,
                            left: containerRect.left - offset,
                            right: containerRect.right + offset,
                            bottom: containerRect.bottom + offset
                        };
                    }

                    // The element must overlap with the visible part of the viewport
                    var visible =
                        (
                            (eltRect.right > viewport.left) &&
                            (eltRect.left < viewport.right) &&
                            (eltRect.bottom > viewport.top) &&
                            (eltRect.top < viewport.bottom)
                        );

                    return visible;
                }

                return {
                    container: container,
                    isInViewport: isInViewport
                };
            }

            function createWatches() {
                var watches = [];

                function add(elt, offset, cb) {
                    if (!isWatched(elt)) {
                        watches.push([elt, offset, cb]);
                    }
                }

                function remove(elt) {
                    var pos = indexOf(elt);
                    if (pos !== -1) {
                        watches.splice(pos, 1);
                    }
                }

                function indexOf(elt) {
                    for (var i = watches.length - 1; i >= 0; i--) {
                        if (watches[i][0] === elt) {
                            return i;
                        }
                    }
                    return -1;
                }

                function isWatched(elt) {
                    return indexOf(elt) !== -1;
                }

                function checkAll(cb) {
                    return function() {
                        for (var i = watches.length - 1; i >= 0; i--) {
                            cb.apply(this, watches[i]);
                        }
                    };
                }

                return {
                    add: add,
                    remove: remove,
                    isWatched: isWatched,
                    checkAll: checkAll
                };
            }

            function observeDOM(watches, container, cb) {
                var observer = new MutationObserver(watch);
                var filter = Array.prototype.filter;
                var concat = Array.prototype.concat;

                observer.observe(container, {
                    childList: true,
                    subtree: true,
                    // changes like style/width/height/display will be catched
                    attributes: true
                });

                function watch(mutations) {
                    // some new DOM nodes where previously watched
                    // we should check their positions
                    if (mutations.some(knownNodes) === true) {
                        setTimeout(cb, 0);
                    }
                }

                function knownNodes(mutation) {
                    var nodes = concat.call([],
                        Array.prototype.slice.call(mutation.addedNodes),
                        mutation.target
                    );
                    return filter.call(nodes, watches.isWatched).length > 0;
                }
            }

            /* WEBPACK VAR INJECTION */
        }.call(exports, (function() {
            return this;
        }())))

        /***/
    }
    /******/
]);