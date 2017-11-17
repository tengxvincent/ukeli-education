<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta charset="utf-8" />
    <title>${r'${productName}'}后台管理系统</title>
    ${r'<#include "../../common/style.ftl"/>'}
</head>
<body class="no-skin">
${r'<#include "../../common/top.ftl"/>'}
<!-- /section:basics/navbar.layout -->
<div class="main-container ace-save-state" id="main-container">
${r'<#include "../../common/nav.ftl"/>'}
    <!-- /section:basics/sidebar -->
    <div class="main-content">
        <div class="main-content-inner">
            <!-- #section:basics/content.breadcrumbs -->
            <div class="breadcrumbs ace-save-state" id="breadcrumbs">
                <ul class="breadcrumb">
                    <li>
                        <i class="ace-icon fa fa-home home-icon"></i>
                        <a href="${r'${adminPath}'}/index.html">首页管理</a>
                    </li>
                    <li class="active">${tabdesp}</li>
                </ul><!-- /.breadcrumb -->
                <!-- /section:basics/content.searchbox -->
            </div>
            <div class="page-content">
                <div class="row pb10 wb100">
                    <div class="col-xs-12 col-sm-8">
                        <form class="form-inline">
                            <div class="form-group">
                                <label for="keyword">关键字：</label>
                                <input type="text" class="form-control" id="keyword">
                            </div>
                            <button type="button" class="btn btn-purple btn-sm" id="searchbtn"><span class="ace-icon fa fa-search icon-on-right bigger-110"></span>搜索</button>
                            <button type="button" class="btn btn-purple btn-sm" id="researchbtn"><span class="ace-icon fa fa-search icon-on-right bigger-110"></span>重置</button>
                        </form>
                    </div>
                    <div class="col-xs-12 col-sm-4 t_ar">
                        <button class="btn btn-sm btn-default" id="addbtn"><i class="ace-icon fa fa-bolt bigger-110"></i>添加</button>
                        <button class="btn btn-sm btn-primary" id="editbtn"><i class="ace-icon fa fa-pencil-square-o bigger-110"></i>修改</button>
                        <button class="btn btn-sm btn-danger" id="delbtn"><i class="ace-icon fa fa-trash-o bigger-110"></i>删除</button>
                    </div>
                </div>

                <div class="row">
                    <div class="col-xs-12">
                        <div>
                            <table class="table table-striped table-bordered table-hover" id="contentTable">
                                <thead>
                                <tr>
                                   <th class="hidden-xs center"><input type="checkbox" class="i-checks"/></th>
                                    <#list pageList as column>
									<th class="hidden-sm hidden-xs"><#if (column.desp)??>${column.desp}</#if></th>
									</#list>
									<th class="hidden-sm hidden-xs">最后修改时间</th>
                                    <th style="border-right:#CCC solid 1px;">操作</th>
                                </tr>
                                </thead>

                                <tbody id="ajax-data">

                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>

            </div><!-- /.page-content -->
        </div>
    </div><!-- /.main-content -->

${r'<#include "../../common/bottom.ftl"/>'}

</div><!-- /.main-container -->
${r'<#include "../../common/script.ftl"/>'}

<script src="${r'${adminPath}'}/res/js/<#if model??>${model}/</#if>${pojo?lower_case}.js?ver=${r'${version}'}"></script>
</body>
</html>