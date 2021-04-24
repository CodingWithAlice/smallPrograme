Page({
    data: {
        area: '',
        price: '',
        inputData: {
            width: 0,
            height: 0,
            ce: 0,
            lvPrice: 0,
            zhenPrice: 0,
            lvEarning: 0,
            zhenEarning: 0,
            getByOwn: 0,
        } 
    },
    inputWacth(e) {
        let item = e.currentTarget.dataset.model;
        this.data.inputData[item] = +e.detail.value;
    },
    compute() {
        let area = (this.data.inputData.width + this.data.inputData.ce + 0.04) * (2 * this.data.inputData.height + this.data.inputData.ce + 0.11);
        let price = area * (this.data.inputData.lvPrice + this.data.inputData.zhenPrice) + this.data.inputData.lvEarning + this.data.inputData.zhenEarning + this.data.inputData.getByOwn;
        area = (+area).toFixed(2);
        price = (+price).toFixed(2);
        this.setData({
            area,
            price,
        })
    }
  })