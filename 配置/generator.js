// TEEK 配置生成器主逻辑

const steps = [
  {
    title: '基本信息',
    fields: [
      { name: 'name', label: '姓名/昵称', type: 'text', required: true, placeholder: '如：张三' },
      { name: 'title', label: '职位/头衔', type: 'text', required: true, placeholder: '如：前端开发工程师' },
      { name: 'description', label: '一句话简介', type: 'text', required: true, placeholder: '如：热爱编程，专注Web开发' },
      { name: 'avatar', label: '头像URL', type: 'text', required: true, placeholder: '建议150x150，支持网络图片' }
    ]
  },
  {
    title: '关于我',
    fields: [
      { name: 'about', label: '详细介绍', type: 'textarea', required: true, placeholder: '介绍你的经历、爱好、专长等' }
    ]
  },
  {
    title: '技能',
    fields: [
      { name: 'skills', label: '技能列表', type: 'tags', required: false, placeholder: '如：JavaScript, React, Node.js' }
    ]
  },
  {
    title: '项目',
    fields: [
      { name: 'projects', label: '项目列表', type: 'projects', required: false }
    ]
  },
  {
    title: '网站',
    fields: [
      { name: 'websites', label: '网站卡片', type: 'websites', required: false }
    ]
  },
  {
    title: '联系方式',
    fields: [
      { name: 'email', label: '邮箱', type: 'text', required: false, placeholder: '如：example@email.com' },
      { name: 'phone', label: '电话', type: 'text', required: false, placeholder: '如：13800000000' },
      { name: 'location', label: '所在地', type: 'text', required: false, placeholder: '如：北京，中国' },
      { name: 'website', label: '个人网站', type: 'text', required: false, placeholder: '如：https://yourdomain.com' }
    ]
  },
  {
    title: '社交媒体',
    fields: [
      { name: 'social', label: '社交平台', type: 'socials', required: false }
    ]
  },
  {
    title: '主题设置',
    fields: [
      { name: 'defaultTheme', label: '默认主题', type: 'select', required: true, options: [
        { value: 'default', label: '默认（蓝色）' },
        { value: 'dark', label: '深色' },
        { value: 'blue', label: '蓝色' },
        { value: 'green', label: '绿色' },
        { value: 'purple', label: '紫色' },
        { value: 'orange', label: '橙色' },
        { value: 'red', label: '红色' },
        { value: 'pink', label: '粉色' },
        { value: 'cyan', label: '青色' },
        { value: 'yellow', label: '黄色' }
      ] }
    ]
  }
];

let currentStep = 0;
const formData = {
  skills: [],
  projects: [],
  websites: [],
  social: []
};

const form = document.getElementById('generator-form');

function renderStep(direction = 0) {
  form.innerHTML = '';
  // 步骤指示器
  const indicator = document.createElement('div');
  indicator.className = 'step-indicator';
  for (let i = 0; i < steps.length; i++) {
    const dot = document.createElement('div');
    dot.className = 'step-dot' + (i === currentStep ? ' active' : '');
    indicator.appendChild(dot);
  }
  form.appendChild(indicator);

  // 步骤标题
  const stepTitle = document.createElement('h2');
  stepTitle.textContent = steps[currentStep].title;
  form.appendChild(stepTitle);

  // 步骤内容
  const stepDiv = document.createElement('div');
  stepDiv.className = 'form-step';
  steps[currentStep].fields.forEach(field => {
    stepDiv.appendChild(renderField(field));
  });
  form.appendChild(stepDiv);

  // 按钮
  const btnGroup = document.createElement('div');
  btnGroup.className = 'btn-group';
  if (currentStep > 0) {
    const prevBtn = document.createElement('button');
    prevBtn.type = 'button';
    prevBtn.className = 'btn btn-secondary';
    prevBtn.textContent = '上一步';
    prevBtn.onclick = () => animateStep(-1);
    btnGroup.appendChild(prevBtn);
  }
  if (currentStep < steps.length - 1) {
    const nextBtn = document.createElement('button');
    nextBtn.type = 'button';
    nextBtn.className = 'btn';
    nextBtn.textContent = '下一步';
    nextBtn.onclick = () => onNext();
    btnGroup.appendChild(nextBtn);
  } else {
    const finishBtn = document.createElement('button');
    finishBtn.type = 'button';
    finishBtn.className = 'btn';
    finishBtn.textContent = '生成配置';
    finishBtn.onclick = onFinish;
    btnGroup.appendChild(finishBtn);
  }
  form.appendChild(btnGroup);

  // 动画处理
  if (direction !== 0) {
    stepDiv.classList.add('fade-in');
    setTimeout(() => {
      stepDiv.classList.remove('fade-in');
    }, 400);
  }
}

function animateStep(direction) {
  const stepDiv = document.querySelector('.form-step');
  const btnGroup = document.querySelector('.btn-group');
  if (btnGroup) {
    // 找到当前激活的按钮
    const btns = btnGroup.querySelectorAll('button');
    btns.forEach(btn => {
      if ((direction > 0 && btn.textContent.includes('下一步')) || (direction < 0 && btn.textContent.includes('上一步'))) {
        btn.disabled = true;
        btn.innerHTML = '<span class="spinner"></span>' + btn.textContent.replace('下一步', '').replace('上一步', '');
      }
    });
  }
  if (!stepDiv) {
    if (direction > 0) currentStep++; else currentStep--;
    renderStep(direction);
    return;
  }
  stepDiv.classList.add('fade-out');
  setTimeout(() => {
    if (direction > 0) currentStep++; else currentStep--;
    renderStep(direction);
  }, 400);
}

function onNext() {
  // 简单校验
  const fields = steps[currentStep].fields;
  for (const field of fields) {
    if (field.required && !formData[field.name]) {
      alert(`请填写${field.label}`);
      return;
    }
  }
  animateStep(1);
}

function onFinish() {
  // 生成配置按钮转圈
  const btnGroup = document.querySelector('.btn-group');
  if (btnGroup) {
    const btns = btnGroup.querySelectorAll('button');
    btns.forEach(btn => {
      if (btn.textContent.includes('生成配置')) {
        btn.disabled = true;
        btn.innerHTML = '<span class="spinner"></span>生成配置';
      }
    });
  }
  // 联系方式合并
  formData.contact = {
    email: formData.email || '',
    phone: formData.phone || '',
    location: formData.location || '',
    website: formData.website || ''
  };
  // 生成config.js
  setTimeout(() => {
    const configStr = generateConfig(formData);
    showConfigResult(configStr);
  }, 500);
}

function generateConfig(data) {
  // 只保留需要的字段
  const config = {
    name: data.name,
    title: data.title,
    description: data.description,
    avatar: data.avatar,
    about: data.about,
    skills: data.skills,
    projects: data.projects,
    websites: data.websites,
    contact: data.contact,
    social: data.social,
    defaultTheme: data.defaultTheme || 'default',
    navigation: [
      { name: '首页', href: '#home' },
      { name: '关于', href: '#about' },
      { name: '项目', href: '#projects' },
      { name: '网站', href: '#websites' },
      { name: '联系', href: '#contact' }
    ],
    settings: {
      enableAnimations: true,
      enableThemeSelector: true,
      enableSmoothScroll: true,
      enableMobileMenu: true,
      enableProjectImages: true,
      enableWebsiteIcons: true
    }
  };
  return 'const CONFIG = ' + JSON.stringify(config, null, 4) + ';';
}

function showConfigResult(configStr) {
  const modal = document.getElementById('config-result-modal');
  const textarea = document.getElementById('config-result');
  textarea.value = configStr;
  modal.classList.add('show');
  // 礼花爆炸
  if (window.confetti) {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      zIndex: 2000
    });
    setTimeout(() => {
      confetti({
        particleCount: 80,
        spread: 120,
        origin: { y: 0.7 },
        zIndex: 2000
      });
    }, 400);
  }
}

document.getElementById('close-modal').onclick = function() {
  document.getElementById('config-result-modal').classList.remove('show');
};
document.getElementById('copy-config').onclick = function() {
  const textarea = document.getElementById('config-result');
  textarea.select();
  document.execCommand('copy');
  this.textContent = '已复制!';
  setTimeout(() => { this.textContent = '复制到剪贴板'; }, 1200);
};

// 项目/网站/社交平台弹窗
function showProjectModal() {
  showCustomModal('添加项目', [
    { name: 'title', label: '项目名称', type: 'text', required: true },
    { name: 'description', label: '项目描述', type: 'text', required: true },
    { name: 'technologies', label: '技术栈（逗号分隔）', type: 'text', required: false },
    { name: 'demo', label: '演示链接', type: 'text', required: false },
    { name: 'github', label: 'GitHub链接', type: 'text', required: false }
  ], values => {
    console.log('添加项目:', values); // 调试日志
    formData.projects.push({
      title: values.title,
      description: values.description,
      technologies: values.technologies ? values.technologies.split(',').map(s=>s.trim()).filter(Boolean) : [],
      demo: values.demo,
      github: values.github
    });
    console.log('当前项目列表:', formData.projects); // 调试日志
    renderStep(0);
  });
}

function showWebsiteModal() {
  showCustomModal('添加网站', [
    { name: 'name', label: '网站名称', type: 'text', required: true },
    { name: 'description', label: '网站描述', type: 'text', required: false },
    { name: 'url', label: '网站链接', type: 'text', required: true },
    { name: 'icon', label: 'FontAwesome图标类名', type: 'text', required: false, placeholder: '如：fas fa-blog' }
  ], values => {
    console.log('添加网站:', values); // 调试日志
    formData.websites.push(values);
    console.log('当前网站列表:', formData.websites); // 调试日志
    renderStep(0);
  });
}

function showSocialModal() {
  showCustomModal('添加社交平台', [
    { name: 'name', label: '平台名称', type: 'text', required: true },
    { name: 'url', label: '平台链接', type: 'text', required: true },
    { name: 'icon', label: 'FontAwesome图标类名', type: 'text', required: false, placeholder: '如：fab fa-github' }
  ], values => {
    console.log('添加社交平台:', values); // 调试日志
    formData.social.push(values);
    console.log('当前社交平台列表:', formData.social); // 调试日志
    renderStep(0);
  });
}

// 通用弹窗
function showCustomModal(title, fields, onSubmit) {
  let modal = document.getElementById('custom-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'custom-modal';
    modal.className = 'modal';
    modal.innerHTML = `<div class="modal-content"><h2></h2><form></form><div class="btn-group"></div></div>`;
    document.body.appendChild(modal);
  }
  
  modal.querySelector('h2').textContent = title;
  const formEl = modal.querySelector('form');
  formEl.innerHTML = '';
  
  fields.forEach(field => {
    const group = document.createElement('div');
    group.className = 'form-group';
    const label = document.createElement('label');
    label.textContent = field.label + (field.required ? ' *' : '');
    group.appendChild(label);
    const input = document.createElement('input');
    input.type = 'text';
    input.name = field.name;
    input.placeholder = field.placeholder || '';
    input.required = field.required;
    group.appendChild(input);
    formEl.appendChild(group);
  });
  
  const btnGroup = modal.querySelector('.btn-group');
  btnGroup.innerHTML = '';
  
  const okBtn = document.createElement('button');
  okBtn.type = 'submit';
  okBtn.className = 'btn';
  okBtn.textContent = '确定';
  btnGroup.appendChild(okBtn);
  
  const cancelBtn = document.createElement('button');
  cancelBtn.type = 'button';
  cancelBtn.className = 'btn btn-secondary';
  cancelBtn.textContent = '取消';
  cancelBtn.onclick = () => modal.classList.remove('show');
  btnGroup.appendChild(cancelBtn);
  
  // 重置表单提交事件
  formEl.onsubmit = null;
  formEl.onsubmit = function(e) {
    e.preventDefault();
    console.log('表单提交触发'); // 调试日志
    
    const values = {};
    let valid = true;
    
    fields.forEach(field => {
      const input = formEl.elements[field.name];
      const v = input ? input.value.trim() : '';
      if (field.required && !v) {
        valid = false;
        console.log('必填字段未填写:', field.name); // 调试日志
      }
      values[field.name] = v;
    });
    
    if (!valid) {
      alert('请填写所有必填项');
      return false;
    }
    
    console.log('表单验证通过，准备提交:', values); // 调试日志
    modal.classList.remove('show');
    
    // 确保回调被调用
    setTimeout(() => {
      try {
        onSubmit(values);
        console.log('回调执行完成'); // 调试日志
      } catch (error) {
        console.error('回调执行错误:', error); // 调试日志
      }
    }, 100);
    
    return false;
  };
  
  modal.classList.add('show');
  
  // 聚焦到第一个输入框
  const firstInput = formEl.querySelector('input');
  if (firstInput) {
    firstInput.focus();
  }
}

function renderField(field) {
  const group = document.createElement('div');
  group.className = 'form-group';
  const label = document.createElement('label');
  label.textContent = field.label + (field.required ? ' *' : '');
  group.appendChild(label);

  if (field.type === 'text') {
    const input = document.createElement('input');
    input.type = 'text';
    input.name = field.name;
    input.placeholder = field.placeholder || '';
    input.value = formData[field.name] || '';
    input.required = field.required;
    input.oninput = e => formData[field.name] = e.target.value;
    group.appendChild(input);
  } else if (field.type === 'textarea') {
    const textarea = document.createElement('textarea');
    textarea.name = field.name;
    textarea.placeholder = field.placeholder || '';
    textarea.value = formData[field.name] || '';
    textarea.required = field.required;
    textarea.oninput = e => formData[field.name] = e.target.value;
    group.appendChild(textarea);
  } else if (field.type === 'tags') {
    group.appendChild(renderTagsField(field));
  } else if (field.type === 'projects') {
    group.appendChild(renderProjectsField());
  } else if (field.type === 'websites') {
    group.appendChild(renderWebsitesField());
  } else if (field.type === 'socials') {
    group.appendChild(renderSocialsField());
  } else if (field.type === 'select') {
    const select = document.createElement('select');
    select.name = field.name;
    field.options.forEach(opt => {
      const option = document.createElement('option');
      option.value = opt.value;
      option.textContent = opt.label;
      select.appendChild(option);
    });
    select.value = formData[field.name] || field.options[0].value;
    select.onchange = e => formData[field.name] = e.target.value;
    group.appendChild(select);
  }
  return group;
}

function renderTagsField(field) {
  const wrapper = document.createElement('div');
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = field.placeholder || '输入后回车添加';
  input.onkeydown = e => {
    if (e.key === 'Enter' && input.value.trim()) {
      e.preventDefault();
      formData.skills.push(input.value.trim());
      input.value = '';
      updateTags();
    }
  };
  wrapper.appendChild(input);
  const tagsDiv = document.createElement('div');
  tagsDiv.className = 'tags-list';
  wrapper.appendChild(tagsDiv);
  function updateTags() {
    tagsDiv.innerHTML = '';
    formData.skills.forEach((tag, idx) => {
      const tagEl = document.createElement('span');
      tagEl.className = 'skill-tag';
      tagEl.textContent = tag;
      tagEl.onclick = () => {
        formData.skills.splice(idx, 1);
        updateTags();
      };
      tagsDiv.appendChild(tagEl);
    });
  }
  updateTags();
  return wrapper;
}

function renderProjectsField() {
  const wrapper = document.createElement('div');
  const list = document.createElement('div');
  list.className = 'projects-list';
  formData.projects.forEach((proj, idx) => {
    const item = document.createElement('div');
    item.className = 'project-item';
    item.innerHTML = `<b>${proj.title}</b> <span style="color:#888;">${proj.description}</span>`;
    const del = document.createElement('button');
    del.type = 'button';
    del.textContent = '删除';
    del.className = 'btn btn-secondary';
    del.style.marginLeft = '8px';
    del.onclick = () => { formData.projects.splice(idx, 1); renderStep(); };
    item.appendChild(del);
    list.appendChild(item);
  });
  wrapper.appendChild(list);
  const addBtn = document.createElement('button');
  addBtn.type = 'button';
  addBtn.className = 'btn btn-secondary';
  addBtn.textContent = '添加项目';
  addBtn.onclick = () => showProjectModal();
  wrapper.appendChild(addBtn);
  return wrapper;
}

function renderWebsitesField() {
  const wrapper = document.createElement('div');
  const list = document.createElement('div');
  list.className = 'websites-list';
  formData.websites.forEach((site, idx) => {
    const item = document.createElement('div');
    item.className = 'website-item';
    item.innerHTML = `<b>${site.name}</b> <span style="color:#888;">${site.url}</span>`;
    const del = document.createElement('button');
    del.type = 'button';
    del.textContent = '删除';
    del.className = 'btn btn-secondary';
    del.style.marginLeft = '8px';
    del.onclick = () => { formData.websites.splice(idx, 1); renderStep(); };
    item.appendChild(del);
    list.appendChild(item);
  });
  wrapper.appendChild(list);
  const addBtn = document.createElement('button');
  addBtn.type = 'button';
  addBtn.className = 'btn btn-secondary';
  addBtn.textContent = '添加网站';
  addBtn.onclick = () => showWebsiteModal();
  wrapper.appendChild(addBtn);
  return wrapper;
}

function renderSocialsField() {
  const wrapper = document.createElement('div');
  const list = document.createElement('div');
  list.className = 'socials-list';
  formData.social.forEach((soc, idx) => {
    const item = document.createElement('div');
    item.className = 'social-item';
    item.innerHTML = `<b>${soc.name}</b> <span style="color:#888;">${soc.url}</span>`;
    const del = document.createElement('button');
    del.type = 'button';
    del.textContent = '删除';
    del.className = 'btn btn-secondary';
    del.style.marginLeft = '8px';
    del.onclick = () => { formData.social.splice(idx, 1); renderStep(); };
    item.appendChild(del);
    list.appendChild(item);
  });
  wrapper.appendChild(list);
  const addBtn = document.createElement('button');
  addBtn.type = 'button';
  addBtn.className = 'btn btn-secondary';
  addBtn.textContent = '添加社交平台';
  addBtn.onclick = () => showSocialModal();
  wrapper.appendChild(addBtn);
  return wrapper;
}

document.addEventListener('DOMContentLoaded', () => renderStep(0));