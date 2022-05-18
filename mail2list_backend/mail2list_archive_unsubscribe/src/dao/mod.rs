use crate::MAIL2LIST_CONFIG;
use rbatis::rbatis::Rbatis;

pub mod interceptor;
use interceptor::*;

///实例化 rbatis orm 连接池
pub async fn init_rbatis() -> Rbatis {
    let mut rbatis = Rbatis::new();

    if MAIL2LIST_CONFIG.debug.eq(&false) && rbatis.is_debug_mode() {
        panic!(
            r#"已使用release模式，但是rbatis仍使用debug模式！请删除 Cargo.toml 中 rbatis的配置 features = ["debug_mode"]"#
        );
    }
    rbatis.add_sql_intercept(AgencyInterceptor{});
    //连接数据库
    println!("rbatis link database ({})...", MAIL2LIST_CONFIG.database_url.clone());
    rbatis
        .link(&MAIL2LIST_CONFIG.database_url)
        .await
        .expect("rbatis link database fail!");
    println!("rbatis link database success!");

    return rbatis;
}

