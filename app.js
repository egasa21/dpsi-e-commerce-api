const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
let cors = require('cors')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
let authRouter = require('./routes/AuthRoutes');
let customerRouter = require('./routes/CustomerRoutes');
let productRouter = require('./routes/ProductRoutes');
let categoryRouter = require('./routes/CategoryRoutes');
let supplierRouter = require('./routes/SupplierRoutes');
let employeeRouter = require('./routes/EmployeeRoutes');
let orderRouter = require('./routes/OrderRoutes');
let orderDetailRouter = require('./routes/OrderDetailRoutes');
let shipperRouter = require('./routes/ShipperRoutes');

const db = require('./models');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', customerRouter);
app.use('/api', categoryRouter);
app.use('/api', supplierRouter);
app.use('/api', productRouter);
app.use('/api', employeeRouter);
app.use('/api', orderRouter);
app.use('/api', orderDetailRouter);
app.use('/api', shipperRouter);
app.use('/api/auth', authRouter);


const syncDB = async () => {
    try {
        await db.sequelize.sync()
        console.log('Database synced successfully')
    } catch (error) {
        console.log(error)
    }
}

// syncDB()

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
