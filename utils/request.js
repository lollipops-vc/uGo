//基地址
const BaseURL='https://www.pjy';

export default function(url,method,data){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BaseURL+url,
			method,
			data,
			success: (res) => {
				//异常判断
				if(res.data.meta.status!==200){
					resolve(res.data.message)
				}
			}
		})
	})
}