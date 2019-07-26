$(function(){
    var data = [
        {
            "businessName": "常用js插件",
            "children": [
                {
                    "name": "lottie动画",
                    "detailOption": [
                        {
                            "name": "引入库文件",
                            "description": "&lt;a href='' target='_blank'&gt;&lt;/a&gt;<br>"
                        },
                        {
                            "name": "提取动画数据",
                            "description":"<div>&nbsp; &nbsp; let animationData = {......};</div><div>&nbsp; &nbsp; let params = {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; container: document.getElementById(\"lottie\"),</div><div>&nbsp; &nbsp; &nbsp; &nbsp; renderer: \"canvas\",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; loop: true,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; autoplay: true,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; path: \"data.json\"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; &nbsp; let anim = lottie.loadAnimation(params);</div>"
                        },
                        {
                            "name": "配置项",
                            "description": "<div>container：为预留的动画容器；</div><div><br></div><div>renderer：为动画模式，html为纯dom结构动画，canvas为画板动画，svg为svg动画；</div><div><br></div><div>loop：为循环</div><div><br></div><div>autoplay：为自动播放</div><div><br></div><div>animationData：为动画数据，该内容与data.js内容一致，所以data.js 可以不使用；</div><div><br></div><div>path：为动画数据，与animationData不可同时使用，数值为data.json的路径</div><div><br></div><div>常用方法：</div><div><br></div><div>输出动画时长秒：</div><div><br></div><div>console.log(\"时长(s):\" + anim.getDuration(false));</div><div>输出动画时长帧：</div><div><br></div><div>console.log(\"时长(帧):\" + anim.getDuration(true));</div><div>暂停：</div><div><br></div><div>anim.pause();</div><div>播放：</div><div><br></div><div>anim.play();</div><div>停止：</div><div><br></div><div>anim.stop();</div><div>销毁动画实例:</div><div><br></div><div>anim.destroy();</div><div>正/反向播放:</div><div><br></div><div>anim.setDirection(parm);</div><div>parm: 1为正向，-1为反向</div><div><br></div><div>播放速度：</div><div><br></div><div>anim.setSpeed(num);</div>"
                    ]
                },
                {
                    "name": "多种类型云资源池",
                    "detailOption": [
                        {
                            "name": "业务痛点1",
                            "description": "大型企业区域分布广泛，会在多个地域同时开展业务，核心业务在私有云部署，同时会协同公有云资源，如何统一管理部署"
                        },
                        {
                            "name": "业务痛点2",
                            "description": "大型企业区域分布广泛，会在多个地域同时开展业务，核心业务在私有云部署，同时会协同公有云资源，如何统一管理部署"
                        },                    
                        {
                            "name": "业务痛点3",
                            "description": "大型企业区域分布广泛，会在多个地域同时开展业务，核心业务在私有云部署，同时会协同公有云资源，如何统一管理部署"
                        }
                    ]
                }                                               
            ]
        }
    ]

    //更新windowData
    window.windowData &&  addData(window.windowData, data);
    !window.windowData && (window.windowData = data);
})


