const banks = [
    {
        'samaCode': '55',
        'bankName': 'Banque Saudi Fransi',
        'nameEn': 'Banque Saudi Fransi',
        'nameAr': 'البنك السعودي الفرنسي',
    },
    {
        'name': 'Alrajhi Bank',
        'samaCode': '80',
        'nameEn': 'Alrajhi Bank',
        'nameAr': 'بنك الراجحي',
    },
    {
        'samaCode': '10',
        'bankName': 'National Commercial Bank',
        'nameEn': 'National Commertial Bank',
        'nameAr': 'البنك الأهلي التجاري',
    },
    {
        'samaCode': '45',
        'bankName': 'Saudi British Bank',
        'nameEn': 'SABB',
        'nameAr': 'ساب',
    },
    {

        'samaCode': '20',
        'bankName': 'Riyadh Bank',
        'nameEn': 'Riyad Bank',
        'nameAr': 'بنك الرياض',
    },
    {

        'samaCode': '40',
        'bankName': 'Saudi American Bank',
        'nameEn': 'SAMBA',
        'nameAr': 'سامبا',
    },
    {
        'samaCode': '05',
        'bankName': 'Alinma Bank',
        'nameEn': 'AL Inma Bank',
        'nameAr': 'بنك الانماء',
    },
    {
        'samaCode': '50',
        'bankName': 'Alawwal bank',
        'nameEn': 'AlAwwal Bank',
        'nameAr': 'البنك الأول',
    },
    {
        'samaCode': '60',
        'bankName': 'Bank AlJazira',
        'nameEn': 'Bank Aljazerah',
        'nameAr': 'بنك الجزيرة',
    },
    {
        'samaCode': '65',
        'bankName': 'Saudi Investment Bank',
        'nameEn': 'Saudi Investment Bank',
        'nameAr': 'البنك السعودي للأستثمار',
    },
    {
        'samaCode': '15',
        'bankName': 'Bank AlBilad ',
        'nameEn': 'BANK ALBELAD',
        'nameAr': 'بنك البلاد',
    },
    {
        'samaCode': '30',
        'bankName': 'Arab National Bank',
        'nameEn': 'Arab National Bank',
        'nameAr': 'البنك العربي الوطني',
    },
    {
        'samaCode': '90',
        'bankName': 'GULF Bank',
        'sarieCode': 'GULFSARI',
        'nameEn': 'Gulf International Bank',
        'nameAr': 'بنك الخليج',
    },
    {
        'samaCode': '95',
        'bankName': 'Emirates Bank',
        'nameEn': 'EMARITE BANK',
        'nameAr': 'بنك الامارات',
    },
    {
        'samaCode': '76',
        'bankName': 'Bank Muscat',
        'nameEn': 'Bank Muscat',
        'nameAr': 'بنك مسقط',
    },
    {
        'samaCode': '71',
        'bankName': 'National Bank of Bahrain',
        'nameEn': 'National Bank Of Bahrain',
        'nameAr': 'بنك البحرين الوطني',
    },
    {
        'samaCode': '75',
        'bankName': 'National Bank of Kuwait',
        'nameEn': 'National Bank of Kuwait',
        'nameAr': 'بنك الكويت الوطني',
    },
    {
        'samaCode': '85',
        'bankName': 'BNP Paribas Bank',
        'nameEn': 'BNP PARIBAS SAUDI ARABIA',
        'nameAr': 'بي ان بي باريبوس',
    },
];
// iban = iban.replace(/\s+/g, ''); 
function checkIban(iban){
   return (!iban)? false: true;
    
  
}

function getIban(){
    const iban = document.getElementById('iban').value //input has id named iban search iban give onClick function
    const result = document.getElementById('result')
    if(!checkIban(iban)){
        result.innerHTML = "the iban incorrect!"
    }
    else{
        result.innerHTML = "The iban is correct"
    }

}

