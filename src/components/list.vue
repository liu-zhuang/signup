<template>
	<div>
		<table style="display:none;" id="table">
			<thead>
				<tr>
					<th>姓名</th>
					<th>性别</th>
					<th>年龄</th>
					<th>电话</th>
					<th>护持时间</th>
					<th>家人是否支持</th>
					<th>是否皈依</th>
					<th>健康状况</th>
					<th>民族</th>
					<th>文化程度</th>
					<th>职业</th>
					<th>家庭住址</th>
					<th>微信号</th>
					<th>报名项目</th>
					<th>具体时间</th>
				</tr>
			</thead>
			<tr v-for="row in users">
				<td>{{row.name}}</td>
				<td>{{row.sexy}}</td>
				<td>{{row.age}}</td>
				<td>{{row.mobile}}</td>
				<td>{{row.comeTime}}</td>
				<td>{{row.isSupport}}</td>
				<td>{{row.isGuiyi}}</td>
				<td>{{row.health}}</td>
				<td>{{row.nation}}</td>
				<td>{{row.studyLv}}</td>
				<td>{{row.career}}</td>
				<td>{{row.address}}</td>
				<td>{{row.weixin}}</td>
				<td>{{row.item?row.item.toString():''}}</td>
				<td>{{row.detailTime?row.detailTime.toString():''}}</td>
			</tr>
		</table>
		<!-- 		<p id="xportxlsx" class="xport"><input type="submit" value="Export to XLSX!" @click="exportExcel" ></p> -->
		<el-button id="xportxlsx" @click="exportExcel">导出</el-button>
		<el-table :data="users" style="width: 100%">
			<el-table-column type="expand">
				<template scope="props">
					<el-form label-position="left" inline class="demo-table-expand">
						<el-form-item label="民族">
							<span>{{ props.row.nation }}</span>
						</el-form-item>
						<el-form-item label="籍贯">
							<span>{{ props.row.birthPalce }}</span>
						</el-form-item>
						<el-form-item label="文化程度">
							<span>{{ props.row.studyLv }}</span>
						</el-form-item>
						<el-form-item label="职业">
							<span>{{ props.row.career }}</span>
						</el-form-item>
						<el-form-item label="家庭住址">
							<span>{{ props.row.address }}</span>
						</el-form-item>
						<el-form-item label="微信号">
							<span>{{ props.row.weixin }}</span>
						</el-form-item>
						<el-form-item label="报名项目">
							<span>{{ props.row.item ? props.row.item.toString() : '' }}</span>
						</el-form-item>
						<el-form-item label="具体时间">
							<span>{{ props.row.detailTime ? props.row.detailTime.toString() : '' }}</span>
						</el-form-item>
					</el-form>
				</template>
			</el-table-column>
			<el-table-column label="姓名" prop="name">
			</el-table-column>
			<el-table-column label="性别" prop="sexy">
			</el-table-column>
			<el-table-column label="年龄" prop="age">
			</el-table-column>
			<el-table-column label="电话" prop="mobile">
			</el-table-column>
			<el-table-column label="护持时间" prop="comeTime">
			</el-table-column>
			<el-table-column label="家人是否支持" prop="isSupport">
			</el-table-column>
			<el-table-column label="是否皈依" prop="isGuiyi">
			</el-table-column>
			<el-table-column label="健康状况" prop="health">
			</el-table-column>
			<el-table-column label="登记日期" prop="registerTime">
			</el-table-column>
		</el-table>
	</div>
</template>
<script>

	import FireBase from 'firebase';
	import XLSX from 'xlsx';
	import FileSaver from 'file-saver';
	console.log(FileSaver);
	// var firebaseApp = FireBase.initializeApp(config);
	// var database = FireBase.database();
	var usersRef = FireBase.database().ref('user');

	export default {
		data: function () {
			return {
			};
		},
		firebase: {
			users: usersRef
		},
		methods: {
			exportExcel: function () {
				/* eslint-disable */
				return export_table_to_excel('table', 'xlsx', null);

				function s2ab(s) {
					if(typeof ArrayBuffer !== 'undefined') {
						var buf = new ArrayBuffer(s.length);
						var view = new Uint8Array(buf);
						for (var i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
							return buf;
					} else {
						var buf = new Array(s.length);
						for (var i=0; i!=s.length; ++i) buf[i] = s.charCodeAt(i) & 0xFF;
							return buf;
					}
				}

				function export_table_to_excel(id, type, fn) {
					var wb = XLSX.utils.table_to_book(document.getElementById(id), {sheet:"Sheet JS"});
					var wbout = XLSX.write(wb, {bookType:type, bookSST:true, type: 'binary'});
					var fname = fn || 'list.' + type;
					try {
						FileSaver.saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), fname);
					} catch(e) { if(typeof console != 'undefined') console.log(e, wbout); }
					return wbout;
				}
				function tableau(pid, iid, fmt, ofile) {
					if(fallback) {
						if(document.getElementById(iid)) document.getElementById(iid).hidden = true; 
						Downloadify.create(pid,{
							swf: 'media/downloadify.swf',
							downloadImage: 'download.png',
							width: 100,
							height: 30,
							filename: ofile, data: function() { var o = doit(fmt, ofile); return window.btoa(o); },
							transparent: false,
							append: false,
							dataType: 'base64',
							onComplete: function(){ alert('Your File Has Been Saved!'); },
							onCancel: function(){ alert('You have cancelled the saving of this file.'); },
							onError: function(){ alert('You must put something in the File Contents or there will be nothing to save!'); }
						});
					} else document.getElementById(pid).innerHTML = "";
				}
				tableau('xlsxbtn',  'xportxlsx',  'xlsx',  'test.xlsx');
			}

		}
	};
</script>
<style scoped>
	.demo-table-expand {
		font-size: 0;
	}
	.demo-table-expand label {
		width: 90px;
		color: #99a9bf;
	}
	.demo-table-expand .el-form-item {
		margin-right: 0;
		margin-bottom: 0;
		width: 50%;
	}
</style>
