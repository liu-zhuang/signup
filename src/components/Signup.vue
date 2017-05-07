<template>
	<div>
		<h2>宁国禅寺义工报名登记</h2>
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="姓名" prop="name">
				<el-input v-model="ruleForm.name"></el-input>
			</el-form-item>
			<el-form-item label="性别" prop="sexy">
				<el-radio class="radio" v-model="ruleForm.sexy" label="男">男</el-radio>
				<el-radio class="radio" v-model="ruleForm.sexy" label="女">女</el-radio>
			</el-form-item>
			<el-form-item label="年龄" prop="age">
				<el-input-number v-model="ruleForm.age" :min="1" :max="100"></el-input-number>
			</el-form-item>
<!-- 			<el-form-item label="出生年月" prop="birthdate">
				<el-date-picker v-model="ruleForm.birthdate" type="date" placeholder="选择出生年月">
				</el-date-picker>
			</el-form-item> -->
			<el-form-item label="民族" prop="nation">
				<el-input v-model="ruleForm.nation"></el-input>
			</el-form-item>
			<el-form-item label="籍贯" prop="birthPalce">
				<el-input v-model="ruleForm.birthPalce"></el-input>
			</el-form-item>
			<el-form-item label="文化程度" prop="studyLv">
				<el-input v-model="ruleForm.studyLv"></el-input>
			</el-form-item>
			<el-form-item label="职业" prop="career">
				<el-input v-model="ruleForm.career"></el-input>
			</el-form-item>
			<el-form-item label="家人是否支持您做义工" prop="isSupport">
				<el-radio class="radio" v-model="ruleForm.isSupport" label="是">是</el-radio>
				<el-radio class="radio" v-model="ruleForm.isSupport" label="否">否</el-radio>
			</el-form-item>
			<el-form-item label="是否皈依" prop="isGuiyi">
				<el-radio class="radio" v-model="ruleForm.isGuiyi" label="是">是</el-radio>
				<el-radio class="radio" v-model="ruleForm.isGuiyi" label="否">否</el-radio>
			</el-form-item>
			<el-form-item label="家庭住址" prop="address">
				<el-input v-model="ruleForm.address"></el-input>
			</el-form-item>
			<el-form-item label="健康状况" prop="health">
				<el-radio class="radio" v-model="ruleForm.health" label="健康">健康</el-radio>
				<el-radio class="radio" v-model="ruleForm.health" label="有重大疾病">有重大疾病</el-radio>
			</el-form-item>
			<el-form-item label="电话" prop="mobile">
				<el-input v-model="ruleForm.mobile"></el-input>
			</el-form-item>
			<el-form-item label="微信号" prop="weixin">
				<el-input v-model="ruleForm.weixin"></el-input>
			</el-form-item>
			<el-form-item label="报名项目" prop="item">
				<el-checkbox-group v-model="ruleForm.item">
					<el-checkbox label="殿堂值班、写缘登记" name="type"></el-checkbox>
					<el-checkbox label="厨房帮手、整理客房" name="type"></el-checkbox>
					<el-checkbox label="法会布置、宾客接待" name="type"></el-checkbox>
					<el-checkbox label="清洁打扫、环境整治" name="type"></el-checkbox>
					<el-checkbox label="物品保管、登记造册" name="type"></el-checkbox>
					<el-checkbox label="观察疏导、安全防范" name="type"></el-checkbox>
					<el-checkbox label="水电维修、简单保养" name="type"></el-checkbox>
					<el-checkbox label="其他特长" name="type"></el-checkbox>
				</el-checkbox-group>
			</el-form-item>
			<el-form-item label="护持时间" prop="comeTime">
				<el-radio class="radio" v-model="ruleForm.comeTime" label="长期义工">
					长期义工 
					<el-tooltip class="item" effect="light" content="可随时根据常住安排来寺" placement="top-start">
						<i class="el-icon-information"></i>
					</el-tooltip>
				</el-radio>
				<el-radio class="radio" v-model="ruleForm.comeTime" label="短期义工">
					短期义工
					<el-tooltip class="item" effect="light" content="香期或法会可来寺" placement="top-start">
						<i class="el-icon-information"></i>
					</el-tooltip>
				</el-radio>
			</el-form-item>
			<el-form-item label="具体时间" prop="detailTime">
				<el-checkbox-group v-model="ruleForm.detailTime">
					<el-checkbox label="周一" name="detailTime"></el-checkbox>
					<el-checkbox label="周二" name="detailTime"></el-checkbox>
					<el-checkbox label="周三" name="detailTime"></el-checkbox>
					<el-checkbox label="周四" name="detailTime"></el-checkbox>
					<el-checkbox label="周五" name="detailTime"></el-checkbox>
					<el-checkbox label="周六" name="detailTime"></el-checkbox>
					<el-checkbox label="周日" name="detailTime"></el-checkbox>
				</el-checkbox-group>
			</el-form-item>
			<el-form-item style="text-align:center;">
				<el-button type="primary" @click="submitForm('ruleForm')">报名</el-button>
				<el-button @click="resetForm('ruleForm')">重置</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
	import FireBase from 'firebase';

	var config = {
		apiKey: 'AIzaSyDoZarte9FnYE-oB8p4AGL6ddy_pus_5Ew',
		authDomain: 'threesister-5dc04.firebaseapp.com',
		databaseURL: 'https://threesister-5dc04.firebaseio.com',
		projectId: 'threesister-5dc04',
		storageBucket: 'threesister-5dc04.appspot.com',
		messagingSenderId: '516939983787'
	};
	var firebaseApp = FireBase.initializeApp(config);
	var database = firebaseApp.database();
	var usersRef = database.ref('user');

	export default {
		data: function () {
			return {
				ruleForm: {
					name: '',
					sexy: '男',
					age: null,
					// birthdate: null,
					nation: null,
					birthPalce: null,
					studyLv: null,
					career: null,
					isSupport: '是',
					isGuiyi: '否',
					address: null,
					health: '健康',
					mobile: null,
					weixin: null,
					item: [],
					comeTime: null,
					detailTime: []
				},
				rules: {
					name: [
					{ required: true, message: '请输入姓名', trigger: 'blur' },
					{ min: 1, max: 8, message: '长度在 1 到 8 个字符', trigger: 'blur' }
					],
					age: [
					{required: false}
					],
					// birthdate: [
					// {type: 'object', required: true, message: '请选择出生日期', trigger: 'blur'}
					// ],
					nation: [
					{required: false}
					],
					birthPalce: [
					{required: false}
					],
					studyLv: [
					{required: false}
					],
					career: [
					{required: false}
					],
					isSupport: [
					{required: false}
					],
					isGuiyi: [
					{required: false}
					],
					address: [
					{required: false}
					],
					mobile: [
					{required: true, message: '请输入联系电话', trigger: 'blur'}
					],
					weixin: [
					{required: false}
					],
					item: [
					{ type: 'array', required: true, message: '请至少选择一个项目', trigger: 'change' }
					],
					comeTime: [{required: true, message: '请至少选择一种护持时间', trigger: 'change'}],
					detailTime: [{
						type: 'array', required: false
					}]
				}
			};
		},
		methods: {
			submitForm (formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						var temp = new Date();
						var year = temp.getFullYear();
						var month = temp.getMonth() + 1;
						var day = temp.getDate();
						this.ruleForm.registerTime = year + '-' + month + '-' + day;
						console.log(this.ruleForm);
						usersRef.push(this.ruleForm);
						this.$notify({
							title: '恭喜！',
							message: '您的登记表已成功提交！'
						});
						this.$router.replace('done');
					} else {
						this.$message('请填写所有必填项!');
						return false;
					}
				});
			},
			resetForm (formName) {
				this.$refs[formName].resetFields();
			}
		}
	};
</script>
<style scoped>
	h2 {
		text-align: center;
		margin:20px 0;
	}	

	.demo-ruleForm {
		max-width: 600px;
		margin: 0 auto;
	}
</style>
