/**
 * 该文件专门用于暴露一个 store 对象，整个应用只有一个store对象
 */

// 引入 createStore ，专门用于创建 redux 最为核心的 store 对象
import { createStore } from "redux";

export default createStore();
