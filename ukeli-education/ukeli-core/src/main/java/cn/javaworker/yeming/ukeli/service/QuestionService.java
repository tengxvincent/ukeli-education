/**
* <p> * Title: 商城管理信息系统 *</p>
* <p> * Description: * </p>
* <p> * Copyright: Copyright (c) 2012-2017* </p>
* <p> * Company: 苏州明翔信息科技有限公司 * </p>
* @author 叶明（开发）
* @version 0.1
*/
package cn.javaworker.yeming.ukeli.service;


import java.util.Date;
import cn.javaworker.yeming.core.jdbc.service.BaseService;
import cn.javaworker.yeming.ukeli.pojo.QuestionDo;
import cn.javaworker.yeming.pojo.Page;

/**
* 创建日期：2017-10-18 14:44:07
* 开发者：叶明(MSN:guming123416@hotmail.com,QQ:47043760)
* 修改者：
* 修改时间：
* 程序作用：
* 1、
* 2、
* 修改说明：
* 1、
* 2、
* 版本：@version 0.1
* @author 叶明
*/
public interface QuestionService extends BaseService<QuestionDo>{

	/**
	 * 获取分页
	 * @param keyword  关键字
	 * @param vtype 类型 
	 * @param elationid 关联编号
	 * @param userid 用户编号
	 * @param stype  是否回答 0 全部  1 已经回答
	 * @param status 状态
	 * @param slock 锁定标志
	 * @param start 开始数量
	 * @param limit 获取数量
	 * @return
	 */
	Page<QuestionDo> getPage(String keyword,short vtype,long relationid,long userid,int stype,int status,int slock,long start, int limit);
	
	/**
	 * 获取分页
	 * @param keyword  关键字
	 * @param vtype 类型 
	 * @param elationid 关联编号
	 * @param userid 用户编号
	 * @param stype  是否回答 0 全部  1 已经回答
	 * @param status 状态
	 * @param slock 锁定标志
	 * @param start 开始数量
	 * @param limit 获取数量
	 * @return
	 */
	Page<QuestionDo> getPage(String question,String vtype,String isanswer,long relationid, String nickname,Date startTime,Date endTime,int status,int slock,long start, int limit);
	
	/**
	 * 排序使用
	 * @param id
	 * @param type
	 * @return
	 */
	QuestionDo getByOrderType(long iorder, int type);
	/**
	 * 处理排序
	 * @param questionDo
	 * @param vquestionDo
	 */
	void order(QuestionDo questionDo,QuestionDo vquestionDo);
}