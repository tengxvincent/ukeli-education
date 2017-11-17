
var productTemplate ='{{each list as product index}}'+
    '<tr>'+
    '   <td class="hidden-xs center" height="28">'+
    '       <label class="pos-rel">'+
    '       		<input class="i-checks" type="checkbox" id="{{ product.id}}">'+
    '       </label>'+
    '   </td>'+
    '   <td class="center">{{ product.id}}</td>'+
    '   <td>{{ product.productname}}</td>'+
    '   <td>{{ product.marketprice}}</td>'+
    '   <td>{{ product.price}}</td>'+
    '   <td>{{ product.vipprice}}</td>'+
    '   <td>{{ product.producttype}}</td>'+
    '   <td>{{ product.datetype}}</td>'+
    '   <td>{{ product.datecount}}</td>'+
    '   <td class="hidden-xs">{{#status(product.status,product.id)}}</td>'+
    '   <td class="hidden-xs">{{dateFormat(product.edittime,\'yyyy-MM-dd hh:mm:ss\')}}</td>'+
    '   <td>'+
    '<a class="btn btn-minier btn-primary"  href="javascript:show({{ product.id}},)" title="查看"><i class="ace-icon fa fa-pencil"></i>查看</a>  '+
    '<a class="btn btn-minier btn-primary"  href="javascript:edit({{ product.id}})" title="修改"><i class="ace-icon fa fa-pencil"></i>修改</a>  '+
    '<a class="btn btn-minier btn-pink" href="javascript:del({{ product.id}})" title="删除"><i class="ace-icon fa fa-trash-o"></i>删除</a>'+
    '  </td>'+
    '</tr>'+
    '{{/each}}'+
    '<tr>'+
    '    <td height="50"></td>'+
    '   <td  colspan="12" id="pager">'+
    '       <div class="fl" style="padding-top:7px"></div>'+
    '       <div align="left" class="fr">'+
    '           <ul class="pagination"></ul>'+
    '       </div>'+
    '   </td>'+
    '</tr>';

$(function () {
    $("#searchbtn").on('click',search);
    $("#researchbtn").on('click',reSearch);
    $("#addbtn").on('click',addproduct);
    $("#editbtn").on('click',editproduct);
    $("#delbtn").on('click',delAll);
    Eymjs.page.init();
    search();
});

/**
 * 搜索
 */
function search() {
	page(1);
}
/**
 * 重置搜索
 */
function reSearch() {
    $("#keyword").val('');
    search();
}

function page(page){
    var keyword = $("#keyword").val();
    Eymjs.page.show(Eymjs.ukeli.url.product.LIST,{keyword:keyword,page:page},productTemplate);
}

/**
 * 增加一个管理员
 */
function addproduct() {
    Eymjs.dialog.showUrl('产品名称增加',Eymjs.ukeli.url.product.EDIT,{},650,420);
}
/**
 * 修改一条记录
 * @param id
 */
function edit(id) {
    Eymjs.dialog.showUrl('修改产品名称',Eymjs.ukeli.url.product.EDIT,{id:id},650,420);
}
/**
 * 修改按钮
 */
function editproduct() {
    var id= Eymjs.page.selectOne("contentTable");
    if(id){edit(id);}
}
/**
 * 选择多个，删除
 */
function delAll() {
    var ids= Eymjs.page.selectList("contentTable");
    if(ids){
        Eymjs.page.delByids(ids,Eymjs.ukeli.url.product.DELETE,"您确定要删除您选择的产品名称吗")
    }
}

/**
 * 删除一个记录
 * @param id
 */
function del(id) {

    Eymjs.page.delByids(id,Eymjs.ukeli.url.product.DELETE,"您确定要删除该产品名称吗?")
}

/**
 * 查看
 * @returns
 */
function show(id){
	 Eymjs.dialog.showUrl('查看',Eymjs.ukeli.url.product.SHOW,{id:id},650,400);
}

/**
 * 上线或者下线一条记录,或者锁定以及一个产品名称
 * @param id
 * @param status
 */
function online(id,status,type) {
    if(!id){return;}
    var msg = "您确定要下线该产品名称吗？";
    if(status==1){
        msg = "您确定要上线该产品名称吗？";
    }
    if(type==1){
        msg = "您确定要审核不通过该产品名称吗？";
        if(status==1){
            msg = "您确定要审核通过该产品名称吗？";
        }
    }

    Eymjs.page.online(Eymjs.ukeli.url.product.STATUS,{id:id,status:status,type:type},msg)
}