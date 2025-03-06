function submitTalk() {
    const input = document.getElementById('input').value;
    const response = document.getElementById('response');
    if (input.trim() === '') {
        response.innerText = '请先告诉我你的困惑哦！';
    } else {
        // 模拟AI回复，实际可接入API
        response.innerText = `我感受到你的心情。你说的是：“${input}”。试试这样：找个平静的时机，和对方聊聊你的感受，比如‘我希望我们能一起面对这个问题’。需要更具体的建议吗？`;
    }
}